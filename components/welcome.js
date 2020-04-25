import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';

let clickNumber = 0;

function trackClicks() {
    if (clickNumber === 0) {
        return <Welcome></Welcome>
    } else if (clickNumber === 2) {
        return <SetWorkout></SetWorkout>
    } else if (clickNumber === 3) {
        return <Workout></Workout>
    }

}



function Welcome() {
    const [welcome, setWelcome] = useState('Welcome');
    const [name, setName] = useState('Get Started')
    const clickHandler = () => {
        setWelcome('Welcome Back!');
        setName('Michael');
        clickNumber++;
        console.log(clickNumber)
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
                {/* <TextInput style={styles.Input}placeholder="enter your name"> </TextInput> */}
                <Button style={styles.Btn} title='Sign In' onPress={clickHandler} />
            </View>

            <View>
                <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
            </View>
        </View>
    );
}

export default Welcome;





