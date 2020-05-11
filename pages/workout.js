import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
import Timer3 from '../components/timer3.js';
import Exercise from '../components/exercise.js'

function Workout() {
    return (
        <View style={styles.Screen}>
            <View style={styles.Box}> 
                <Text style={ styles.HeaderText }> 
                    Super Set #1 
                </Text>
                <Text> </Text>
                <Exercise></Exercise>
            </View>
            <Timer3></Timer3>
        </View>
    );
}

export default Workout;





