import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';



export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Sign In Below",
            name: '',
            tempName: '',
            step: 0,
        };
    }

    pressSignInHandler = () => {
        this.setState({ message: 'Welcome Back!', name: this.state.tempName, step: 1 });
    }

    pressStartHandler = () => {
        this.props.navigation.navigate('Workout')
    }

    render () {
        if (this.state.step === 0){
            return (
                <View style={styles.Screen}>
                    <View style={styles.TopLogoAndHeading}>
                        <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                        <Text style={styles.Welcome}>{this.state.message}</Text>
                    </View>
                    <View>
                        <Text style={styles.cta}>{name}</Text>
                    </View>
    
                    <View style={styles.LogIn}>
                        <TextInput placeholder='username name' style={styles.Input2} onChangeText={text => this.setState({ tempName: text })}></TextInput>
                        <TextInput placeholder='password' secureTextEntry={true} style={styles.Input2} onChangeText={text => this.setState({ tempName: text })}></TextInput>
                        <TouchableOpacity style={styles.Btn} onPress={this.pressSignInHandler}>
                            <Text style={styles.WText}>Sign In</Text>
                        </ TouchableOpacity>
                    </View>
    
                    <View>
                        <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
                    </View>
                </View>
            );
        }
        if (this.state.step === 1){
            return (
                <View style={styles.Screen}>
                    <View style={styles.TopLogoAndHeading}>
                        <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                        <Text style={styles.Welcome}>{this.state.message}</Text>
                    </View>
                    <View>
                        <Text style={styles.cta2}>{this.state.name}</Text>
                    </View>

                    <View style={styles.LogIn}>
                        <TouchableOpacity style={styles.Btn} onPress={this.pressStartHandler}>
                            <Text style={styles.WText}>Start Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
                    </View>
                </View>
            );
        }
    }
}
