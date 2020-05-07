import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';

export default function Welcome({ props }) {
    const [welcome, setWelcome] = useState('Welcome');
    
    const clickHandler = () => {
        setWelcome('  Loading...');
        console.log("props ==== ", props)
        navigation.navigate('GetStarted');
    }

    return (
        <View style={styles.Screen}>
            <View>
                <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                <Text style={styles.Welcome}>{welcome}</Text>
            </View>
            <View style={styles.LogIn}>
                <Button style={styles.Btn} title='Get Started' onPress={clickHandler} />
            </View>
        </View>
    );
}