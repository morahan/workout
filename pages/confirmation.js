import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';
import favoriteExercises from '../components/tagsView.js';
import TagsView from '../components/displayTags.js';
// import myFavExercises from '../components/displayTags.js';
// import { ScrollView } from 'react-native-gesture-handler';

// console.log("confirmation.js > top of page selected = ", selected);
console.log("confirmation.js > top of page favoriteExercises = ", favoriteExercises);
console.log('confirmation.js> top of page> type of favExercises == ', typeof(favoriteExercises));

export default class Confirmation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
                        {/* error below!  Showing only partial list and unselected!  Closer... */}
                           {/* <myFavExercises>
                           </myFavExercises> */}
                            <TagsView
                                // all={tags}
                                selected={this.state.favoriteExercises}
                                // isExclusive={false}
                                step={this.state.step}
                                // key={}
                            />
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