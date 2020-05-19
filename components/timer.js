import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { greaterThan } from 'react-native-reanimated';
import styles from '../styles/styles.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        //initialize the counter duration
        this.state = {
            tempTime: '',
            totalDuration: "120",
            sessionInProgress: true,
            finishCount: 0,
            restCount: 0,
        };
    }

    stopSession = () => {
        alert("You completed "+ this.state.finishCount + " sets! ")
        this.setState({
            sessionInProgress: false,
            finishCount: 0,
            restCount: 0,
        }, () => console.log("finishCount === ", this.state.finishCount, "restCount === ", this.state.restCount))
    }
  
    startSession = () => {
        this.setState({
            sessionInProgress: true,
        })
    }

    typeDurationEventHandler(time){
        let newDuration = '';
        let numbers = '0123456789';
        for (var i = 0; i < time.length; i++) {
            if (numbers.indexOf(time[i]) > -1) {
                newDuration = newDuration + time[i];
            }
            else {
                alert("please enter numbers only");
            }
        }
        this.setState({ tempTime: newDuration*3 }, () => {
            console.log("temp time === ", this.state.tempTime)
        });
    }

    enterDurationEventHandler(time){        
        this.setState({ totalDuration: this.state.tempTime }, () => {
            console.log("Total Duration === ", this.state.totalDuration)
        });
    }

    timerFinishEventHandler(){
        console.log("insideTimerFinish => ", this.state.finishCount, this.state.restCount)
        if (this.state.finishCount === this.state.restCount){
            this.setState({ finishCount: this.state.finishCount++, totalDuration: 15}, () => console.log("finishCount === ", this.state.finishCount, "restCount === ", this.state.restCount))
        } else {
            this.setState({ restCount: this.state.restCount++, totalDuration: 30, }, () => console.log("finishCount === ", this.state.finishCount, "restCount === ", this.state.restCount))
        }

         
    }

    render() {
        return (
            <View style={timerStyles.container}>
                <View>
                    <CountDown
                        // background of timer
                        digitStyle={timerStyles.digitBox}
                        //duration of countdown in seconds
                        until={this.state.totalDuration}
                        //formate digits to show
                        timeToShow={['M', 'S']}
                        // format lables for digits
                        timeLabels={{m: 'Min', s: 'Sec'}}
                        
                        style={timerStyles.timer}
                        //on Finish call
                        onFinish={this.timerFinishEventHandler}
                        // onFinish={() => alert('Nice Work! Time for next Set')}
                        //on Press call
                        onPress={() => alert('Pump It!')}
                        // size of duration Text
                        size={23}
                        // Play Pause
                        running={this.state.sessionInProgress}
                        // Digit Text Styling
                        digitTxtStyle={timerStyles.digitText}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Enter Number of Minutes"
                        underlineColorAndroid='transparent'
                        style={timerStyles.TextInputStyle}
                        // keyboardType='numeric'
                        maxLength='2'
                        onChangeText={(time) => this.typeDurationEventHandler(time)}
                        // onSubmitEditing = {(time) => this.enterDurationEventHandler(time)}
                    /> 
                    <TouchableOpacity 
                        style={timerStyles.customizeBtn}
                        onPress={(time) => this.enterDurationEventHandler(time)}>
                        <Text style={styles.WText2}>Customize Timer</Text>
                    </TouchableOpacity>
                       
                </View>

                {!this.state.sessionInProgress &&
                    <TouchableOpacity style={timerStyles.startButton} onPress={this.startSession}>
                        <Text style={timerStyles.colorWhite}>Continue Session</Text>
                    </TouchableOpacity>
                }
                {this.state.sessionInProgress &&
                    <TouchableOpacity style={timerStyles.stopButton} onPress={this.stopSession}>
                        <Text style={timerStyles.colorWhite}>Stop Session</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}


const timerStyles = StyleSheet.create({
    container: {
        width: "50vw",
        paddingTop: "5vh",
        // paddingBottom: "5vh",
    },

    timer: {
        width: "100%",
        backgroundColor: "whitesmoke",
        borderRadius: 17,
        paddingBottom: "3vh",
        marginBottom: "3vh",
    },

    digitBox: {
        backgroundColor: 'black',
        marginTop: '3vh',
        marginTop: '3vh',
        borderRadius: "100%",
        width: "10vw",
        height: "10vw",
    },

    digitText: {
        backgroundColor: 'black',
        color: "white",
        fontSize: 15,
    },

    startButton: {
        justifyContent: "center",
        width: "35vw",
        height: "7vh",
        //  padding: "1vh",
        //  margin: "5vh",
        //  padding: "15%",
        //  margin: "10%",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 17,
        backgroundColor: "green"
    },

    customizeBtn: {
        // color: "white",
        justifyContent: "center",
        width: "35vw",
        height: "7vh",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "green",
        borderRadius: 17,
        margin: "3%",
    },

    stopButton: {
        justifyContent: "center",
        width: "35vw",
        height: "7vh",
        //  padding: "1vh",
        //  margin: "5vh",
        //  padding: "15%",
        //  margin: "10%",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "black",
        borderRadius: 17,
    },

    colorWhite: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 26
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
        marginBottom: 0,
    } ,
});