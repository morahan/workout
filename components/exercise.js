import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';

let exerciseList = [["Squats", 25], ["Leg Extensions", 15], ["Lunges", 20]]
let count = 0;

function Exercise() {
    return (
        <View style={styles.Screen}>
            <View style={styles.Box}>
                <View style={styles.EBox}>
                    <Text style={styles.Text2}>{exerciseList[count][0]}</Text>
                    <Text style={styles.Text2}>{exerciseList[count][1]}</Text>
                </View>
                <View styles={styles.Btn}>
                    <TouchableOpacity>
                        <Text style={styles.Text2} onPress={() => count++}>Next Set</Text>
                    </TouchableOpacity>
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
        </View>
    );
}

export default Exercise;





