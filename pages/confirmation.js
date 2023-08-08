import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';
// import favoriteExercises from '../components/tagsView.js';

// console.log('confirmation.js> top of page> type of favExercises == ', typeof(favoriteExercises));

export default class Confirm extends Component {
    constructor(props){
        super(props);
        this.state ={
            message: "Confirm",
            name: '',
            step: 5,
        };
    }

    pressWorkoutHandler = () => {
        // console.log(this.props.navigation.navigate, "~ confirm.js > pressWorkoutHandler navigate to workout")
        // console.log("confirmation.js > pressWorkoutHandler > FavorteExercises ==> ", favoriteExercises);
    }


    render () {
        if (this.state.step === 5){
            return (
                <View style={styles.Screen}>
                    <Text style={styles.Text}> Confirm your Exercises</Text>
                    <View>
                        <Text style={styles.Text2}>
                            Your Selected Exercises are:
                        </Text>
                        <Text style={styles.Text3}>
                            favoriteExercises is Var exported from TagsView.  How to display it?
                        </Text>

                        {/* <Text> */}
                        {/* {favoriteExercises.map((exercise, index) => {
                             <Text key={index}> {exercise} </Text>
                        })} */}

                            {/* {favoriteExercises.map((x) => (
                                <Text>x</Text>
                            ))} */}
                        {/* </Text> */}

                    </View>
                    <TouchableOpacity onPress={this.pressWorkoutHandler} >
                        <Text>Start Workout</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}