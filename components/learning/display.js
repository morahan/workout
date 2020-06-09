import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TagsView from './TagsView.js';
// import { getActiveChildNavigationOptions } from 'react-navigation';
import Workout from '../workoutList.js';
import Styles from '../../styles/styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const selected = ['Today', 'Tomorrow'];
const tags = ["one", "two", "Three"];

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            target: "target",
        }
    }
    
    getUpperTags = () => { 
        const num = Object.keys(Workout.upperBody.exercises).length
        this.setState({
            target: "Upper Body"
        })
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    } 
    
    getLowerTags = () => { 
        const num = Object.keys(Workout.lowerBody.exercises).length;
        this.setState({
            target: "Lower Body"
        })
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    }

    getCoreTags = () => { 
        const num = Object.keys(Workout.core.exercises).length
        this.setState({
            target: "Core"
        })
        for (let i = 1; i < num+1; i++){
            tags.push(Workout.upperBody.exercises[i].name)
        }
    }
        

    nextEventHandler = () => {
        // step++;
        this.setState({step: this.state.step+=1})
        console.log("step === ", this.state.step)
    }

    // getUpperTags();
    
    render() {
        return (
            <>
                <View style={Styles.ContainerSafeView}>
                    <View style={Styles.Spacer10}>
                            {/* <Text style={Styles.Text2}> 
                            Choose {this.state.target} Exercises 
                            </Text> */}
                            <Text style={Styles.Text2}> 
                            Choose Exercises 
                            </Text>
                            <Text>* Note: Not all exercises will be complted in one day. These exercises will be shuffled for you on your {this.state.target} days. </Text>
                    </View>
                </View>

                <TagsView
                    all={tags}
                    selected={selected}
                    isExclusive={false}
                    step={this.state.step}
                />

                <View>
                    <TouchableOpacity style={Styles.BtnBtm}>
                        <Text style={Styles.WText} 
                        onPress={this.nextEventHandler}>
                          Next
                        </Text>
                        {/* <Text style={Styles.WText}>Next</Text> */}
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

export default Display;