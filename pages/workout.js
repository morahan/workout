import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles.js';
import Exercise from '../components/exercise.js'

function Workout(props) {
    console.log("workout.js ~ Work Out props === ", props)
    console.log("workout.js ~ Work Out props.nav === ", props.navigation)
    return (
        <View style={styles.Screen}>
            <Exercise target={props.navigation.state.params.day}></Exercise>
            {/* <Exercise></Exercise> */}
            {/* ==== Text below is Proof that we are sending proper target day as props to exercise.js */}
            {/* <Text>{props.navigation.state.params.day}</Text> */}
        </View>
    );
}

export default Workout;
