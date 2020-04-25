import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
import Welcome from './components/welcome.js';
import Workout from './components/workout.js';
import SetWorkout from './components/setWorkout.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import 'react-native-gesture-handler';

function App(){

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.Screen}>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={Welcome}/>
          <Stack.Screen name="Setup" component={SetWorkout} />
          <Stack.Screen name="Workout" component={Workout} />
        </Stack.Navigator> */}
        {/* <Welcome></Welcome> */}
        <SetWorkout></SetWorkout>
        {/* <WorkOut></WorkOut> */}

      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
