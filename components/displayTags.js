import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TagsView from './tagsView.js';
// import { getActiveChildNavigationOptions } from 'react-navigation';
import Workout from './workoutList.js';
import Styles from '../styles/styles.js';
import customEx from './customExercises.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const selected = [];
const tags = [];

class DisplayTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            target: "Upper Body",
        }
        this.nextEventHandler = this.nextEventHandler.bind(this)
    }

    componentDidMount(){
        this.iterateTags();
    }

    iterateTags = () => {
        if (this.state.step === 1){
            this.getUpperTags();
        }
        if (this.state.step === 2){
            this.getLowerTags();
        }
        if (this.state.step === 3){
            this.getCoreTags();
            // console.log("~ DisplayTags.js ~ == navigate to next page, completed customization ==", this.props.navigation)
        }
        if (this.state.step > 3){
            customEx.selected.push(selected);
            console.log("~displayTags.js - iterate tags - step is > 3.  step = ", this.state.step);
            console.log("displayTags.js - Custom Selected Exercises = ", customEx.selected)
            this.props.navigation.navigate('Workout')
        }
    }
      
    getUpperTags = () => { 
        const num = Object.keys(Workout.upperBody.exercises).length
        this.setState({
            target: "Upper Body"
        })
        tags.splice(0, tags.length)
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    } 
    
    getLowerTags = () => { 
        const num = Object.keys(Workout.lowerBody.exercises).length;
        this.setState({
            target: "Lower Body"
        })
        tags.splice(0, tags.length)
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.lowerBody.exercises[i].name)
        }
    }

    getCoreTags = () => { 
        const num = Object.keys(Workout.core.exercises).length
        this.setState({
            target: "Core"
        })
        tags.splice(0, tags.length)
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.core.exercises[i].name)
        } 
    }
    
    nextEventHandler = () => {
        console.log("displayTags.js- nextEventHandler - SelectedTags ===", selected)
        this.setState({step: this.state.step+=1})
        console.log("step === ", this.state.step)
        this.iterateTags()
    }

    render() {
        // this.iterateTags()
        return (
            <>
                <View style={Styles.ContainerSafeView}>
                    <View style={Styles.Spacer3}>
                        <Text style={Styles.Text2}> 
                        Choose {this.state.target} Exercises 
                        </Text>
                        <Text>* Note: Not all exercises will be complted in one day. These exercises will be shuffled for you on your {this.state.target} days. </Text>
                    </View>
                </View>

                <ScrollView style={Styles.TagsView}>
                    <View>
                        <TagsView
                            all={tags}
                            selected={selected}
                            isExclusive={false}
                            step={this.state.step}
                            // key={key}
                        />
                    </View>
                </ScrollView>
                
                <View>
                    <TouchableOpacity style={Styles.BtnBtm} onPress={this.nextEventHandler}>
                        <Text style={Styles.WText}>
                             Next
                        </Text>
                    </TouchableOpacity>
                </View>

            </>
        );
    }
}

export default DisplayTags;