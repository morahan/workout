import React, { Component, useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
// import { Component } from 'react';



let count = 0;
let exerciseList = [["Squats", 25], ["Leg Extensions", 15], ["Lunges", 20]];
class Exercise extends Component {
    constructor(props){
        super(props);
        this.state = {
            // setNum: 1,
            exercise: exerciseList[count][0],
            reps: exerciseList[count][1]
        }
    }
    
    nextExerciseEventHandler = () => {
        count++;
        this.setState({
            exercise: exerciseList[count][0],
            reps: exerciseList[count][1]
        });
        console.log(count)
    }

    render(){
        return (
            <View style={styles.Screen}>
                <View style={styles.Box}>
                    <View style={styles.EBox}>
                        <Text style={styles.Text2}>{this.state.exercise}</Text>
                        <Text style={styles.Text2}>{this.state.reps}</Text>
                    </View>
                    <View styles={styles.Btn}>
                        <TouchableOpacity>
                            <Text style={styles.Text2} onPress={this.nextExerciseEventHandler}>Next Set</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Exercise;





