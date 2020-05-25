import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';


export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: "Sign Up Below",
            name: '',
            nextStep: false,
        };
    }

    // const [welcome, setWelcome] = useState('Sign Up');
    // const [name, setName] = useState('Enter your name below')
    pressSignUpHandler = () => {
        this.setState({ message: 'Welcome!', name: this.state.tempName, nextStep: true});
    }

    pressNextStepHandler = () => {
        this.props.navigation.navigate('Workout')
    }

    render () {
        if (this.state.nextStep === false ){
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
        if (this.state.nextStep === true) {
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
                        <TouchableOpacity style={styles.Btn} onPress={this.pressNextStepHandler} >
                            <Text style={styles.WText}>Start Now</Text>
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







