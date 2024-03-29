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
import ExModal from './pages/modalPage.jsx';

// ==== components =====
import Footer from './components/footer.js';
import TagsView from './components/tagsView.js'
import DisplayTags from './components/displayTags.js'

//=== Nav ===
import Navigator from './routes/homeStack.js';

// components to Test
import Timer from './components/timer.js'
// import Exercise from './components/exercise.jsx';

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
        // <SignUp></SignUp>
        // <SignIn></SignIn>
        // <Workout></Workout> 
        // <Footer></Footer>
        //  Broken --> // <SetWorkout></SetWorkout> 
        //  <GetStarted></GetStarted> 
        // <Timer></Timer>
        // <Customize></Customize>
        // <TagsView></TagsView>
        // <DisplayTags></DisplayTags>

        // <ExModal></ExModal>
        
    <Navigator/>
  );
}

export default App;
