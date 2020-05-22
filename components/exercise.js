import React, { Component, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';

let exercise = 0;
let completedExercises = 0;
let exerciseList = [["Squats", 25], ["Leg Extensions", 15], ["Lunges", 20]];
let round1 = [["Pushups", 25], ["Bench Press", 15], ["Chest Fly", 20]];
let round2 = [["Situps", 25], ["Plank", 15], ["Bridge", 20]];
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
            exercise: exerciseList[exercise][0],
            reps: exerciseList[exercise][1],
            superSet: superSet,
            buttonText: "Next Exercise",
        }
    }
    
    nextExerciseEventHandler = () => {
        // track progress of workout
        if (exercise === exerciseList.length -1) {
            exercise = 0;
            round++;
            completedExercises++;
        } else {
            exercise++;
            completedExercises++;
        }

        // Setting Exercise and Reps and Round
        this.setState({
            exercise: exerciseList[exercise][0],
            reps: exerciseList[exercise][1],
            round: round,
        });

        // When finished with round change button text to "Next Round"
        if (exercise % (exercisesInSuperSet-1) === 0){
            this.setState({ 
                buttonText: "Next Round!"
            })
        }
        // Reset button to Default "Next Exercise"
        if (exercise % (exercisesInSuperSet) === 0){
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
        console.log("ex: ", exercise, "ss: ", superSet, "round ", round, "completed Exercises: ", completedExercises)
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