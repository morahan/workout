import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';
import workout from './workoutList.js';
const moment = require('moment');

// let currentExerciseNum = 1;
let currentDay = moment().format('dddd'); 
let currentExVar = 1;
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

class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            // round: round,
            // === Dynamic
            exercise: workout[props.target].exercises[currentExVar].name,
            reps: workout[props.target].exercises[currentExVar].reps,
            buttonText: "Next Exxxercise",


            // superSet: superSet,
            // completedExercises: 0,
            // completedRounds:  0,
            // completedSuperSets: 0,
            // currentEx: 1
        }
        console.log("exercise.js ~ props === ", props)
    }

    // enterDurationEventHandler = (time) => {
    // }

    // track progress of workout
    nextExerciseEventHandler = () => {

        // iterate next exercise
        setInRound++;
        completedExercises++;
        currentExVar++

        // Anticipate Next Round - Change Button Text
        if (setInRound % exercisesPerRound === 0) {
            this.setState({
                buttonText: "Next Round!",
            })

            // Anticipate Next SuperSet
            let plusOneRound = currentRound + 1
            if (plusOneRound % roundsPerSuperSet === 0) {
                this.setState({
                    buttonText: "Next Super Set!"
                })
            }
        } 
        
        let plusOne = exercisesPerRound + 1;
        // increment round && reset setInRound && currentExerciseNum && btnText
        if (setInRound % plusOne === 0 && completedRounds !== roundInSuperSet){
            currentRound++;
            completedRounds++;
            this.setState({
                // round: round,
                // completedRounds: completedRounds,
                buttonText: defaultNextBtnText,
            })
            setInRound = 1;
            currentExVar = 1;
            // currentExerciseNum -= 3
        }

        // Setting Exercise and Reps
        this.setState({
            exercise: workout[this.props.target].exercises[currentExVar].name,
            reps: workout[this.props.target].exercises[currentExVar].reps,
        });
       
        // Increment Superset
        if (currentRound === 3 && completedExercises % exercisesPerRound === 0) {
            currentSuperSet++;
            completedRounds++
            completedSuperSets++;
            // currentExVar = setInRound * completedSuperSets+ 1;
            currentRound = 1;
        } 

        // Completed final superset
        // if (this.state.completedSuperSets === superSetTargetNum){
        //     this.setState({ 
        //         buttonText: "Done!"
        //     })
        //     alert("Nice Work! You Completed Your Goal Today!");
        // }
        console.log("exercise.js ~ | currentExVar=", currentExVar, " | Set In Round =", setInRound, " | current round =", currentRound, " | currentSuperS =", currentSuperSet, " | completed Ex =", completedExercises, " | completed Rounds =", this.state.completedRounds, " | completed SuperSets =", this.state.completedSuperSets, " | setInRound", setInRound)
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