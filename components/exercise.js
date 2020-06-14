import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';
import workout from './workoutList.js';
const moment = require('moment');

let exerciseNum = 1;
let completedExercises = 0;
let completedRounds = 0;
let completedSuperSets = 0;
let round = 1;
let superSet = 1;
let superSetTargetNum = 3; 
let exercisesInSuperSet = 3;
let defaultNextBtnText = "Next Exercise";
let currentDay = moment().format('dddd'); 

class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: round,
            // === Dynamic
            exercise: workout[props.target].exercises[exerciseNum].name,
            reps: workout[props.target].exercises[exerciseNum].reps,
            superSet: superSet,
            buttonText: "Next Exercise",
            completedExercises: 0,
            completedRounds:  0,
            completedSuperSets: 0,
        }
        console.log("exercise.js ~ props === ", props)
    }

    // enterDurationEventHandler = (time) => {
    // }

    nextExerciseEventHandler = () => {
        // track progress of workout

        // iterate every round
        if (exerciseNum+1 % exercisesInSuperSet === 0) {
            exerciseNum = 1;
            round++;
            completedRounds++;
            completedExercises++;
            this.setState({
                completedExercises: completedExercises,
                completedRounds: completedRounds,
                buttonText: "Next Round!"
            })
        }  else if (currentExercise-1 % 3) {
            exerciseNum -3;
        }
        
        else if (exerciseNum + 1 % exercisesInSuperSet === 0 && round % 3 === 0) {
            exerciseNum += 3;
        } else {
            exerciseNum++;
            completedExercises++;
            this.setState({
                completedExercises: completedExercises,
                buttonText: defaultNextBtnText,
            })
        }

        // Setting Exercise and Reps and Round
        this.setState({
            exercise: workout[this.props.target].exercises[exerciseNum].name,
            reps: workout[this.props.target].exercises[exerciseNum].reps,
        });
       
        // Finish Superset
        if (round === 3 && exerciseNum % exercisesInSuperSet === 0) {
            superSet++;
            completedSuperSets++;
            round = 1;
            this.setState({
                superSet: superSet,
                round: round,
                buttonText: "Next Superset!",
                completedSuperSets: completedSuperSets
            })
        } 
        // Completed final superset
        if (this.state.completedSuperSets === superSetTargetNum){
            this.setState({ 
                buttonText: "Done!"
            })
            alert("Nice Work! You Completed Your Goal Today!");
        }
        console.log("exercise.js ~ current Ex: ", exerciseNum, "round: ", round, "ss: ", superSet, "completed Ex: ", this.state.completedExercises, "completed Rounds: ", this.state.completedRounds, "completed SuperSets: ", this.state.completedRounds)
        console.log("exercise.js ~ Current day ===== ", currentDay)
    }

    render() {
        return (
            // <View style={styles.Screen}>
                <View style={styles.WorkoutScreen}>
                    <Text style={styles.HeaderText}>
                        {"Super Set #" + this.state.superSet}
                    </Text>
                    <Text style={styles.HeaderText2}>{"Round " + this.state.round} </Text>
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