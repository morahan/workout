import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';

// Edit code below! Copied from Welcome 
function SignUp() {
    const [welcome, setWelcome] = useState('Welcome');
    const [name, setName] = useState('Get Started')
    const clickHandler = () => {
        setWelcome('Welcome Back!');
        setName('Michael')
    }

    return (
        <View style={styles.Screen}>
            <View>
                <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                <Text style={styles.Welcome}>{welcome}</Text>
            </View>
            <View>
                <Text style={styles.cta}>{name}</Text>
            </View>

            <View style={styles.LogIn}>
                <Button style={styles.Btn} title='Sign In' onPress={clickHandler} />
            </View>

            <View>
                <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
            </View>
        </View>
    );
}

export default SignUp;





