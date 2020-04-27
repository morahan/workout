import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
import Welcome from './components/welcome.js';
import Workout from './components/workout.js';
import SetWorkout from './components/setWorkout.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Welcome} />
                <Stack.Screen name="Setup" component={SetWorkout} />
                <Stack.Screen name="Workout" component={Workout} />
            </Stack.Navigator>

            {/* <SafeAreaView style={styles.Screen}> */}
            {/* <Welcome></Welcome> */}
            {/* <SetWorkout></SetWorkout> */}
            {/* <Workout></Workout> */}

            {/* </SafeAreaView> */}
        </NavigationContainer>
    );
}



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


function Welcome( { navigation }) {
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
                <Button style={styles.Btn} title='Sign In' onPress={clickHandler} />
            </View>

            <Button 
                title="Set Workout"
                onPress={() => navigation.push('SetWorkout')}
            />

            <View>
                <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
            </View>
        </View>
    );
}

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
                    <Button title="Customize" style={{ backgroundColor: "green" }}></Button>
                    <Button title="Start" style={{ backgroundColor: "green" }}></Button>
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

function Workout() {
    return (
        <View style={styles.Screen}>
            <View style={styles.Box}>
                <Text style={styles.HeaderText}>
                    Super Set #1
                </Text>
                <Text> </Text>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>Squats</Text>
                    <Text style={styles.Text2}>25 Reps</Text>
                </View>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>Leg Extensions</Text>
                    <Text style={styles.Text2}>15 Reps</Text>
                </View>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>Lunges</Text>
                    <Text style={styles.Text2}>20 Reps</Text>
                </View>
            </View>
            <Timer></Timer>
        </View>
    );
}

export default App;





