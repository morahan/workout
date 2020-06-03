import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';
import workout from '../components/workoutList.js';



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
        if (this.state.step === 1){
            return (
                <View style={styles.Screen}>
                    <Text>Time To Customize Your Days</Text>
                    <TouchableOpacity onPress={this.dayPressHandler} >
                        <Text>Next (Step 1)</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if (this.state.step === 2){
            return (
                <View style={styles.Screen}>
                    <Text>Time To Customize Your Days</Text>
                    <TouchableOpacity>
                        <Text>Step 2</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}