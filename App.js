import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
import Welcome from './components/welcome.js';
import Workout from './components/workout.js';
import SetWorkout from './components/setWorkout.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Welcome}/>
          <Stack.Screen name="Setup" component={SetWorkout} />
          <Stack.Screen name="Workout" component={Workout} />
        </Stack.Navigator>

      {/* <SafeAreaView style={styles.Screen}>
        <Welcome></Welcome>
        {/* <SetWorkout></SetWorkout> */}
        {/* <Workout></Workout> */}
      {/* </SafeAreaView> */}

    // </NavigationContainer>
  );
}

export default App;
