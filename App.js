import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
import { AppLoading } from 'expo';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

// ==== pages ====
import Welcome from './pages/welcome.js';
import Workout from './pages/workout.js';
// import SetWorkout from './pages/setWorkout.js';
import GetStarted from './pages/getStarted.js';

// ==== components =====
import Footer from './components/footer.js';
import Navigator from './routes/homeStack.js';
import Timer3 from './components/timer3.js'

function App(){
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={Welcome}/>
    //       <Stack.Screen name="Setup" component={SetWorkout} />
    //       <Stack.Screen name="Workout" component={Workout} />
    //     </Stack.Navigator>
    // </NavigationContainer>
      
      // <Navigator />
      // <SafeAreaView style={styles.Screen}>
      // </SafeAreaView>
        //  <Welcome></Welcome> 
        //  <GetStarted></GetStarted> 
        //  <SetWorkout></SetWorkout> 
        //  <Workout></Workout> 
        <Timer3></Timer3>
      // <Footer></Footer>

  );
}

export default App;
