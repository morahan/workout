import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

// ==== pages ====
import Welcome from './pages/welcome.js';
import Workout from './pages/workout.js';
// import SetWorkout from './pages/setWorkout.js';

// ==== components =====
import Footer from './components/footer.js';
import Navigator from './routes/homeStack.js';

function App(){
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={Welcome}/>
    //       <Stack.Screen name="Setup" component={SetWorkout} />
    //       <Stack.Screen name="Workout" component={Workout} />
    //     </Stack.Navigator>
    // </NavigationContainer>

      <SafeAreaView style={styles.Screen}>
        <Navigator></Navigator>
        <Welcome></Welcome>
        {/* <SetWorkout></SetWorkout> */}
        {/* <Workout></Workout> */}
        <Footer></Footer>
      </SafeAreaView>

  );
}

export default App;
