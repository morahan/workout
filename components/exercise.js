import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';
import workout from './workoutList.js';
const moment = require('moment');

let currentExerciseNum = 1;
let setInRound = 1;
let roundInSuperSet = 1;
let round = 1;
let superSet = 1;
let completedExercises = 0;
let completedRounds = 0;
let completedSuperSets = 0;
// let totalExerciseSets = 0;
let exercisesPerRound = 3;
let roundsPerSuperSet = 3;
let superSetTargetNum = 3; 
let defaultNextBtnText = "Next Exercise";
let currentDay = moment().format('dddd'); 

class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: round,
            // === Dynamic
            exercise: workout[props.target].exercises[currentExerciseNum].name,
            reps: workout[props.target].exercises[currentExerciseNum].reps,
            superSet: superSet,
            buttonText: "Next Exercise",
            completedExercises: 0,
            completedRounds:  0,
            completedSuperSets: 0,
            // currentExerciseNum: 1,
        }
        console.log("exercise.js ~ props === ", props)
    }

    // enterDurationEventHandler = (time) => {
    // }

    // track progress of workout
    nextExerciseEventHandler = () => {

        // iterate next exercise
        setInRound++;
        // totalExerciseSets++;
        currentExerciseNum++;
        completedExercises++;

        // track completed exercise
        this.setState({
            completedExercises: completedExercises,
        })

        // Anticipate Next Round - Change Button Text
        if (setInRound+1 % exercisesPerRound === 0) {
            
            // Anticipate Next SuperSet
            if (round+1 % roundsPerSuperSet === 0) {
                this.setState({
                    buttonText: "Next Super Set!"
                })
            } else {
                this.setState({
                buttonText: "Next Round!"
                })
            }
        } 
        
        // increment round && reset setInRound && currentExerciseNum && btnText
        if (setInRound % exercisesPerRound === 0){
            round++;
            completedRounds++;
            roundInSuperSet++;
            this.setState({
                // round: round,
                completedRounds: completedRounds,
                buttonText: defaultNextBtnText,
            })
            setInRound = 1;
            // currentExerciseNum -= 3
        }

        // Setting Exercise and Reps
        this.setState({
            exercise: workout[this.props.target].exercises[currentExerciseNum].name,
            reps: workout[this.props.target].exercises[currentExerciseNum].reps,
        });
       
        // Increment Superset
        if (round === 3 && currentExerciseNum % exercisesPerRound === 0) {
            superSet++;
            completedSuperSets++;
            roundInSuperSet = 1;
            round = 1;
            this.setState({
                superSet: superSet,
                round: round,
                buttonText: "Next Superset!",
                completedSuperSets: completedSuperSets
            })
        } 

        // Completed final superset
        // if (this.state.completedSuperSets === superSetTargetNum){
        //     this.setState({ 
        //         buttonText: "Done!"
        //     })
        //     alert("Nice Work! You Completed Your Goal Today!");
        // }
        console.log("exercise.js ~ | currentExNum =", currentExerciseNum, " | Set In Round =", setInRound, " | current round =", round, " | ss =", superSet, " | completed Ex =", this.state.completedExercises, " | completed Rounds =", this.state.completedRounds, " | completed SuperSets =", this.state.completedSuperSets)
        console.log("exercise.js ~ Current day ===== ", currentDay)
    }

    render() {
        return (
            // <View style={styles.Screen}>
                <View style={styles.WorkoutScreen}>
                    <Text style={styles.HeaderText}>
                        {"Super Set #" + this.state.superSet}
                    </Text>
                    <Text style={styles.HeaderText2}>{"Round " + roundInSuperSet} </Text>
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

                    <Timer restTime='30' completedE={this.state.completedExercises} completedR={this.state.completedRounds} completedS={this.state.completedSuperSets}  ></Timer>
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