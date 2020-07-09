import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';
import workout from './workoutList.js';
import { Audio } from 'expo-av';

const moment = require('moment');

// let currentExerciseNum = 1;
let currentDay = moment().format('dddd'); 
let currentEx = 1;
let currentRound = 1;
let currentSuperSet = 1;
let setInRound = 1;
let roundInSuperSet = 1;
let completedExercises = 0;
let completedRounds = 0;
let completedSuperSets = 0;
// let totalExerciseSets = 0;
let exercisesPerRound = 3;
let roundsPerSuperSet = 3;
let superSetTargetNum = 3; 
let defaultNextBtnText = "Next Exercise";
let baseExInRound = 1;

class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercise: workout[props.target].exercises[currentEx].name,
            reps: workout[props.target].exercises[currentEx].reps,
            buttonText: "Next Exercise",
        }
        console.log("exercise.js ~ props === ", props)
    }

    // new audio attempt baced on https://www.youtube.com/watch?v=HCvp2fZh--A
    async componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActicveInBackground: true,
            playsThroughEarpieceAndroid: true,
        })

        this.soundChing = new Audio.Sound();
        this.soundChaChing = new Audio.Sound();
        this.soundCountMoney = new Audio.Sound();

        const status = {
          shouldPlay: false
        }

        this.soundChing.loadAsync(require('../assets/audio/Ching.mp3'), status, false);
        this.soundChaChing.loadAsync(require('../assets/audio/ChaChing.mp3'), status, false);
        this.soundCountMoney.loadAsync(require('../assets/audio/CountMoney.mp3'), status, false);
    }

    playChingSound() {
        this.soundChing.replayAsync();
        //  this.sound.setPosition.async = 0;
    };
    playChaChingSound() {
        this.soundChaChing.replayAsync();
        //  this.sound.setPosition.async = 0;
    };
    playCountMoneySound() {
        this.soundCountMoney.replayAsync();
        //  this.sound.setPosition.async = 0;
    };

    // track progress of workout
    nextExerciseEventHandler = () => {

        // ========  play audio every button press --> 
        // new try from youtube video 
        // this.playChingSound()

        // iterate next exercise
        completedExercises++;
        currentEx++;

        // Anticipate Next Round - Change Button Text
        if (currentEx % exercisesPerRound === 0) {
            this.setState({
                buttonText: "Next Round!",
            })

            // Anticipate Next SuperSet
            if (currentRound % roundsPerSuperSet === 0) {
                this.setState({
                    buttonText: "Next Super Set!"
                })
            }
        } 
      
        // increment round & reset currentExerciseNum && btnText
        if (completedExercises !== 0 && completedExercises % exercisesPerRound === 0){
            currentRound++;
            completedRounds++;
            currentEx = baseExInRound;
            roundInSuperSet ++;

            console.log("~~~~~ inside here =============")
            this.setState({
                buttonText: defaultNextBtnText,
                // currentEx: currentEx
            })

            // Increment Superset
            if (roundInSuperSet-1 === roundsPerSuperSet) {
                console.log("~~~~~ increment SS here =============")
                setTimeout(() => { this.playChaChingSound(); }, 3700);
                this.playCountMoneySound();
                currentSuperSet++;
                completedRounds++;
                completedSuperSets++;
                currentRound = 1;
                roundInSuperSet = 1;
                baseExInRound = exercisesPerRound * completedSuperSets + 1;
                currentEx = baseExInRound;
                console.log("===== new currentEx =====", currentEx)
            } else {
                this.playChaChingSound();
            }
        } else {
            this.playChingSound();
        }

        // Setting Exercise and Reps
        this.setState({
            exercise: workout[this.props.target].exercises[currentEx].name,
            reps: workout[this.props.target].exercises[currentEx].reps,
            // currentEx: currentEx,
        });

        // Completed final superset
        if (this.state.completedSuperSets === superSetTargetNum){
            this.setState({ 
                buttonText: "Done!"
            })
            alert("Nice Work! You Completed Your Goal Today!");
        }
        console.log("exercise.js ~", "| compEx =", completedExercises, " | curEx=", currentEx, " | compRounds =", completedRounds, " | curRound=", currentRound, " | compSS =", completedSuperSets, " | curSS =", currentSuperSet, " | SetInRound =", setInRound, " | roundInSS =", roundInSuperSet)
        console.log("exercise.js ~ Current day ===== ", currentDay)
    }

    render() {
        return (
            // <View style={styles.Screen}>
                <View style={styles.WorkoutScreen}>
                    <Text style={styles.HeaderText}>
                        {"Super Set #" + currentSuperSet}
                    </Text>
                    <Text style={styles.HeaderText2}>{"Round " + currentRound} </Text>
                    <View style={styles.Box}>
                        <View style={styles.EBox}>
                            <Text style={styles.Text2}>{this.state.exercise}</Text>
                            <Text style={styles.Text2}>{this.state.reps + " Reps"}</Text>
                        </View>
                        <View style={styles.Btn}>
                            <TouchableOpacity>
                                <Text style={styles.WText} onPress={this.nextExerciseEventHandler}>{this.state.buttonText}</Text>
                                {/* <Text style={styles.WText} onPress={() => this.props.nextExerciseEventHandler(23)}>{this.state.buttonText}</Text> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <Text style={styles.Text}>{this.props.day}</Text> */}
                {/* <TextInput
                    placeholder="Enter Duration"
                    underlineColorAndroid='transparent'
                    style={timerStyles.TextInputStyle}
                    keyboardType='numeric'
                    maxLength={10} 
                    onChangeText={(time) => this.enterDurationEventHandler(time)}
                />   */}

                    <Timer restTime='30' completedE={completedExercises} completedR={completedRounds} completedS={completedSuperSets}  ></Timer>
                </View>

            // </View>
        );
    }
}


export default Exercise;

// const timerStyles = StyleSheet.create({
//     TextInputStyle: {
//         textAlign: 'center',
//         height: 40,
//         borderRadius: 17,
//         borderWidth: 2,
//         borderColor: '#009688',
//         marginBottom: 10
//     },
// });