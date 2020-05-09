import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
import Timer from '../components/countDownTimer.js';


function Workout() {
    return (
        <View style={styles.Screen}>
            <View style={styles.Box}> 
                <Text style={ styles.HeaderText }> 
                    Super Set #1 
                </Text>
                <Text> </Text>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>Squats</Text>
                    <Text style={styles.Text2}>25 Reps</Text>
                </View>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>Leg Extensions</Text>
                    <Text style={styles.Text2}>15 Reps</Text>
                </View>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>Lunges</Text>
                    <Text style={styles.Text2}>20 Reps</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.beginButton}>
                <Text style={styles.colorWhite}>Begin Session</Text>
            </TouchableOpacity>

            {/* <Timer></Timer> */}
        </View>
    );
}

export default Workout;





