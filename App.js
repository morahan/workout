import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from './styles/styles.js';
import Welcome from './components/welcome.js'

function App(){

  return (
    <SafeAreaView style={styles.Screen}>

      <Welcome></Welcome>
      {/* <View style={styles.Welcome}>
        <Image source={require('./assets/fl-icon.png')} style={{height: 117, width: 117, alignSelf: "center"}}/>
        <Text style={styles.Welcome}>Welcome</Text>
      </View>

      <View>
        <Text style={styles.cta}>Get started</Text>
      </View>

      <View>
        <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
      </View> */}

    
    </SafeAreaView>
  );
}

export default App;
