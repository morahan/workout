import React from 'react';
import { View, Text } from 'react-native';
import TagsView from './TagsView.js'
import { getActiveChildNavigationOptions } from 'react-navigation';
import Workout from '../workoutList.js'
import Styles from '../../styles/styles.js'

const selected = ['Today', 'Tomorrow']
let target = "target"

let getTags = {

    getUpperTags: () => { 
        const num = Object.keys(Workout.upperBody.exercises).length
        target = "Upper Body";
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    },
    getLowerTags: () => { 
        const num = Object.keys(Workout.lowerBody.exercises).length
        target = "Lower Body";
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    },
    getCoreTags: () => { 
        const num = Object.keys(Workout.core.exercises).length
        target = "Core";
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    },
}
            

const tags = []

function Display() {
    getTags.getUpperTags()
    return (
        <View style={Styles.Spacer10}>

            <Text style={Styles.Text2}> 
            Choose {target} Exercises 
            </Text>
            <Text>* Note: Not all exercises will be complted in one day. These exercises will be shuffled for you on your {target} days. </Text>

            <TagsView
                all={tags}
                selected={selected}
                isExclusive={false}
            />
        </View>
    )
}

export default Display;