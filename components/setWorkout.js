import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';


function SetWorkout() {
    // const [welcome, setWelcome] = useState('Welcome');
    // const [name, setName] = useState('Get Started')
    // const clickHandler = () => {
    //     if buttonNum
    //     setWelcome('Welcome Back!');
    //     setName('Michael');
    // }

    return (
        <View style={styles.Screen}>
            <View>
                <Text style={styles.cta2}>Choose Your Workout</Text>
            </View>

            <View style={styles.BtnBox}>
                <View>
                    <Text style={styles.Text}>
                        Legs
                    </Text>
                </View>
                <View style={styles.BtnHz}>
                    <Button title="Customize" style={{backgroundColor: "green"}}></Button>
                    <Button title="Start" style={{backgroundColor: "green"}}></Button>
                </View>
            </View>
            <View style={styles.BtnBox}>
                <View>
                    <Text style={styles.Text}>
                        Core
                    </Text>
                </View>
                <View style={styles.BtnHz}>
                    <Button title="Customize" style={{ backgroundColor: "green" }}></Button>
                    <Button title="Start" style={{ backgroundColor: "green" }}></Button>
                </View>
            </View>
            <View style={styles.BtnBox}>
                <View>
                    <Text style={styles.Text}>
                        Upper Body
                    </Text>
                </View>
                <View style={styles.BtnHz}>
                    <Button title="Customize" style={{ backgroundColor: "green" }}></Button>
                    <Button title="Start" style={{ backgroundColor: "green" }}></Button>
                </View>
            </View>
           

            <View>
                <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
            </View>
        </View>
    );
}

export default SetWorkout;





