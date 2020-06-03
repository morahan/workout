import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';
import workout from '../components/workoutList.js';

const fs = require('fs');

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        };
    }

    dayPressHandler = () => {
        this.setState({step: 2})
    }

    render() {
        if (step === 1){
            return (
                <View style={styles.Screen}>
                    <Text>Time To Customize Your Days</Text>
                    <TouchableOpacity onPress={this.dayPressHandler} >
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if (step === 2){
            return (
                <View style={styles.Screen}>
                    <Text>Time To Customize Your Days</Text>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            )
        }
    }
}