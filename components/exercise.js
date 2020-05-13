import React, { Component, useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
// import { Component } from 'react';

let exercise = 0;
let exerciseList = [["Squats", 25], ["Leg Extensions", 15], ["Lunges", 20]];
let round = 1;
let superSet = 1;

class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            round: round,
            exercise: exerciseList[exercise][0],
            reps: exerciseList[exercise][1],
            superSet: superSet,
        }
    }
    
    nextExerciseEventHandler = () => {
        if (exercise === exerciseList.length - 1) {
            exercise = 0;
            round++
        } else {
            exercise++;
        }

        this.setState({
            exercise: exerciseList[exercise][0],
            reps: exerciseList[exercise][1],
            round: round,
        });

        if (round === 4) {
            superSet++;
            round = 1;
            this.setState({
                superSet: superSet,
                round: round,
            })
        }
        console.log("ex: ", exercise, "ss: ", superSet, "round ", round)
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
                                <Text style={styles.Text2} onPress={this.nextExerciseEventHandler}>Next Set</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            // </View>
        );
    }
}

export default Exercise;
