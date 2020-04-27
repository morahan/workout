import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
// import Welcome from './components/welcome.js';
import Welcome from './components/welcome3.js';
import Workout from './components/workout.js';
import SetWorkout from './components/setWorkout.js';




function App(){

  return (
    <SafeAreaView style={styles.Screen}>

      <Welcome></Welcome>
      {/* <SetWorkout></SetWorkout> */}
      {/* <WorkOut></WorkOut> */}

    
    </SafeAreaView>
  );
}

export default App;
