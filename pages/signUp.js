import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';
import workout from '../components/workoutList.js';
const moment = require('moment');

let currentDay = moment().format('dddd'); 
let target = '';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Sign Up Below",
            name: '',
            step: 0,
        };
    }

    pressSignUpHandler = () => {
        this.setState({ message: 'Welcome!', name: this.state.tempName, step: 1});
    }

    pressStartHandler = (props) => {
        let setTargetMuscles = function(){
            if (workout.upperBody.days.includes(currentDay)) {
                target =  'upperBody'
            }
            if (workout.lowerBody.days.includes(currentDay)) {
                target = 'lowerBody';
            }
            if (workout.core.days.includes(currentDay)) {
                target = 'core';
            }
        }
        setTargetMuscles();

        // pass through desired target muscles based on day
        this.props.navigation.navigate('Workout', { day: target })
    }

    pressCustomizeHandler = () => {
        console.log( this.props.navigation.navigate, "=== signUp.js, navigate to customize workout (displayTags.js) ====")
        this.props.navigation.navigate('DisplayTags')
    }

    render () {
        if (this.state.step === 0 ){
            return (
                <View style={styles.Screen}>
                    <View>
                        <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                    </View>
                    <View>
                        <Text style={styles.cta2}>{this.state.message}</Text>
                        <Text style={styles.cta2}>{this.state.name}</Text>
                    </View>
                    
                    <View style={styles.LogIn}>
                        <TextInput placeholder='your name' style={styles.Input2} onChangeText={text => this.setState({tempName: text})}></TextInput>
                        <TouchableOpacity style={styles.Btn} onPress={this.pressSignUpHandler} >
                            <Text style={styles.WText}>Sign Up</Text>
                        </TouchableOpacity> 
                    </View>

                    <View>
                        <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
                    </View>
                </View>
            );
        } 
        if (this.state.step === 1) {
            return (
                <View style={styles.Screen}>
                    <View>
                        <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                    </View>
                    <View>
                        <Text style={styles.cta2}>{this.state.message}</Text>
                        <Text style={styles.cta2}>{this.state.name}</Text>
                    </View>

                    <View style={styles.LogIn}>
                        <TouchableOpacity style={styles.Btn} onPress={this.pressStartHandler} >
                            <Text style={styles.WText} day={this.state.target}>Start Now</Text>
                            {/* <Text style={styles.WText}>Start Now</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.pressCustomizeHandler} >
                            <Text style={styles.Text} day={this.state.target}>Customize</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
                    </View>
                </View>
            )
        }
    }
}







