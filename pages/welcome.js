import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';

export default function Welcome({ navigation }) {
    const [welcome, setWelcome] = useState('Welcome');
    
    const clickHandler = () => {
        // setWelcome('  Loading...');
        // console.log("props ==== ", props)
        navigation.navigate('GetStarted');
    }

    return (
        <View style={styles.Screen}>
            <View style={styles.TopLogoAndHeading}>
                <Image source={require('../assets/FL-Icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                <Text style={styles.Welcome}>{welcome}</Text>
            </View>
            <View style={styles.LogIn}>
                <TouchableOpacity style={styles.Btn} onPress={clickHandler} >
                    <Text style={styles.WText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}