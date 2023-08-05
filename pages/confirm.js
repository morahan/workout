import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';

export default class Confirm extends Component {
    constructor(props){
        super(props);
        this.state ={
            message: "Confirm",
            name: '',
            step: 5,
        };
    }

    pressWorkoutHandler = () => {
        console.log(this.props.navigation.navigate, "~ confirm.js > pressWorkoutHandler navigate to workout")
    }

    render () {
        if (this.state.step === 5){
            return (
                <View style={styles.Screen}>
                    <Text style={styles.Text}> Confirm your Exercises</Text>
                    <View>
                        <Text style={styles.Text2}>
                            Your Selected Exercises are:
                        </Text>
                        <Text style={styles.Text3}>

                        </Text>
                    </View>
                    <TouchableOpacity onPress={this.pressWorkoutHandler} >
                        <Text>Start Workout</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}