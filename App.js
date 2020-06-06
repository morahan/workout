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
import SetWorkout from './pages/setWorkout.js';
import GetStarted from './pages/getStarted.js';
import SignUp from './pages/signUp.js';
import SignIn from './pages/signIn.js';
import Customize from './pages/customize.js';

// ==== components =====
import Footer from './components/footer.js';
import TagsView from './components/learning/TagsView.js'
import Display from './components/learning/display.js'

//=== Nav ===
import Navigator from './routes/homeStack.js';

// components to Test
import Timer from './components/timer.js'

function App(){
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={Welcome}/>
    //       <Stack.Screen name="Setup" component={SetWorkout} />
    //       <Stack.Screen name="Workout" component={Workout} />
    //     </Stack.Navigator>
    // </NavigationContainer>
      
    // <SafeAreaView style={styles.Screen}>
    
    // </SafeAreaView>
    
        // <Welcome></Welcome> 
        // <Navigator/>
        // <SignUp></SignUp>
        // <SignIn></SignIn>
        // <Workout></Workout> 
        // <Footer></Footer>
        // <SetWorkout></SetWorkout> 
        //  <GetStarted></GetStarted> 
        // <Timer></Timer>
        // <Customize></Customize>
        // <TagsView></TagsView>
        <Display></Display>

  );
}

export default App;
