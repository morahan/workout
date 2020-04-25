import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';


function App(){
  const [outputText, setOutputText] = useState('Ready to get started!?')
  const [listOfTracks, setListOfTracks] = useState([])
  // console.log()

  const logText = (input) => {
    console.log(input)
  }
  return (
    <SafeAreaView style={styles.Screen}>
      <View style={styles.head}>
        <Image source={require('./assets/FL-icon.png')} style={{height: 117, width: 117, alignSelf: "center"}}/>
        <Text style={styles.Welcome}>Welcome</Text>
      </View>

    
    </SafeAreaView>
  );
}

export default App;
