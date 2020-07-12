import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';

class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Your Name',
        };
    }

    signInHandler = (props) => {
        // this.setState({ name: "Lola Sign In"}),
        this.props.navigation.navigate('SignIn')
        console.log("Get Started Handler --> Sign In")
    }

    signUpHandler = () => {
        this.setState({ name: "Lola Sign Up"})
        this.props.navigation.navigate('SignUp')
        console.log("Get Started Handler --> Sign Up")
    }


    render () {
        return (
            <View style={styles.Screen}>
                <View>
                    <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                    <Text style={styles.Head}>Get Started</Text>
                </View>
                <View>
                    <Text style={styles.cta2}>{this.state.name}</Text>
                </View>

                <View style={styles.LogIn}>
                    <TouchableOpacity style={styles.Btn} onPress={this.signInHandler}>
                        <Text style={styles.WText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btn} onPress={this.signUpHandler}>
                        <Text style={styles.WText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
                </View>
            </View>
        );
    }
}

export default GetStarted;