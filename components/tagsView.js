// Link to article: https://medium.com/fantageek/how-to-make-tag-selection-view-in-react-native-b6f8b0adc891
//  Link to potential different appraoch article: https://medium.com/fantageek/how-to-make-tag-selection-view-in-react-native-b6f8b0adc891

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from '../styles/styles.js';
import BackgroundButton from './backgroundButton.js';
// import addOrRemove from './addOrRemove.js';
// import customEx from './customExercises.js';

// let favoriteExercises = [];

export default class TagsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.selected,
            favoriteExercises: []
        }
    }   

    render() {
        return (
            // <View style={styles.container} key={}>
            <View style={Styles.Container}>
                {this.makeButtons()}
            </View>
        )
    }

    onPress = (tag) => {
        let selected
        if (this.props.isExclusive) {
            selected = [tag]
        } else {
            selected = this.addOrRemove(this.state.selected, tag)
        }
        this.setState({
            selected: selected
        })
        return selected
    }

    addOrRemove = (array, item) => {
        const exists = array.includes(item)
        // const favExercises = []
        // console.log("TagView.js ~ addOrRemove() ~ favoriteExercisesArray (pre)== ", favoriteExercises )
        // console.log("exists === ", exists, )
        if (exists) {
            console.log("TagView.js > addOrRemove > Removing Exercise(tag) ", item)
            // console.log(typeof(favoriteExercises))
            array.filter((remove) => { return remove !== item })
            // favExercises.filter((remove) => { return remove !== item })
            // return favoriteExercises 
        } else {
            array.push(item)
            // favExercises.push(Workout.core.exercises[i].name)
            console.log("TagView.js > addOrRemove > Adding Exercise(Tag) == ", item)
            // console.log('TagView.js > typeof Favorite Exercise = ', typeof(favoriteExercises[0]), "favoriteExercisesArray (post)== ", favoriteExercises)
        }
        this.setState({
            favoriteExercises: array
        })
        // return favoriteExercises;
    }
    
    makeButtons() {
        return this.props.all.map((tag, i) => {
            const on = this.state.selected.includes(tag)
            const backgroundColor = on ? "#44ace8" : "lightgreen"
            const textColor = on ? "white" : "black"
            const borderColor = on ? "blue" : "grey"
            // const backgroundColor = on ? R.colors.on.backgroundColor : R.colors.off.backgroundColor
            // const textColor = on ? R.colors.on.text : R.colors.off.text
            // const borderColor = on ? R.colors.on.border : R.colors.off.border
            return (
                <>
                    <BackgroundButton
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        borderColor={borderColor}
                        onPress={() => {
                            console.log("TagsView.js > backgroundButton change > onPress == ", tag)
                            this.onPress(tag)
                        }}
                        key={i}
                        showImage={on}
                        title={tag} 
                        selected={this.state.selected}
                    />
                </>
            )
        })
    }
}
// export const favoriteExercises;