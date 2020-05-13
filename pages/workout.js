import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
import Timer from '../components/timer.js';
import Exercise from '../components/exercise.js'

function Workout() {
    return (
        <View style={styles.Screen}>
            <Exercise></Exercise>
            <Timer></Timer>
        </View>
    );
}

export default Workout;
