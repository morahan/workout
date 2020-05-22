import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';
import workout from './workoutList.js';

let exerciseNum = 0;
let completedExercises = 0;
let round = 1;
let superSet = 1;
let superSetTargetNum = 3
let exercisesInSuperSet = 3;
let defaultNextBtnText = "Next Exercise";

class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: round,
            exercise: workout.upperBody.exercises[exerciseNum].name,
            reps: workout.upperBody.exercises[exerciseNum].reps,
            superSet: superSet,
            buttonText: "Next Exercise",
        }
    }
    
    nextExerciseEventHandler = () => {
        // track progress of workout
        if (exerciseNum === exercisesInSuperSet -1) {
            exerciseNum = 0;
            round++;
            completedExercises++;
        } else {
            exerciseNum++;
            completedExercises++;
        }

        // Setting Exercise and Reps and Round
        this.setState({
            exercise: workout.upperBody.exercises[exerciseNum].name,
            reps: workout.upperBody.exercises[exerciseNum].reps,
            round: round,
        });

        // When finished with round change button text to "Next Round"
        if (exerciseNum % (exercisesInSuperSet-1) === 0){
            this.setState({ 
                buttonText: "Next Round!"
            })
        }
        // Reset button to Default "Next Exercise"
        if (exerciseNum % (exercisesInSuperSet) === 0){
            this.setState({ 
                buttonText: defaultNextBtnText
            })
        }
        // Finish Superset
        if (round === 4) {
            superSet++;
            round = 1;
            this.setState({
                superSet: superSet,
                round: round,
                buttonText: "Next Superset!"
            })
        }
        // Completed final superset
        if (this.state.superSet === superSetTargetNum+1){
            this.setState({ 
                buttonText: "Done!"
            })
        }
        console.log("ex: ", exerciseNum, "ss: ", superSet, "round ", round, "completed Exercises: ", completedExercises)
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
                            </TouchableOpacity>
                        </View>
                    </View>
                {/* <TextInput
                    placeholder="Enter Duration"
                    underlineColorAndroid='transparent'
                    style={timerStyles.TextInputStyle}
                    keyboardType='numeric'
                    maxLength={10} 
                    onChangeText={(time) => this.enterDurationEventHandler(time)}
                />   */}

                    <Timer></Timer>
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