import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';

export default function CustomizationComplete({ navigation }) {
    const [welcome, setWelcome] = useState('Welcome');

    const clickHandler = () => {
        // setWelcome('  Loading...');
        // console.log("props ==== ", props)
        navigation.navigate('Workout');
    }

    return (
        <View style={styles.Screen}>
            <View style={styles.TopLogoAndHeading}>
                <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                <Text style={styles.Welcome}>{welcome}</Text>
            </View>
            <View style={styles.LogIn}>
                <TouchableOpacity style={styles.Btn} onPress={clickHandler} >
                    <Text style={styles.WText}>Lets Workout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}