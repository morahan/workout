import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import styles from '../styles/styles.js';

const defaultDuration = '120';
const newDuration = "";
export default class App extends Component {
    constructor(props) {
        super(props);
        //initialize the counter duration
        this.state = {
            tempTime: '',
            totalDuration: "60",
            sessionInProgress: true,
        };
    }

    stopSession = () => {
        this.setState({
            sessionInProgress: false,
        })
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
        this.setState({ tempTime: newDuration*60 });
        console.log("temp time == ", this.state.tempTime)
    }

    enterDurationEventHandler(time){
        // let newDuration = '';
        // let numbers = '0123456789';
        // for (var i = 0; i < time.length; i++) {
        //     if (numbers.indexOf(time[i]) > -1) {
        //         // newDuration = newDuration + time[i];
        //         newDuration = time[i] * 60;
        //     }
        //     else {
        //         alert("please enter numbers only");
        //     }
        // }
        
        this.setState({ totalDuration: this.state.tempTime });
        console.log("Total Duration === ", this.state.totalDuration)
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
                        timetoShow={['M', 'S']}
                        // format lables for digits
                        timeLables={{m: 'Minutes', s: 'Seeeeconds'}}
                        
                        style={timerStyles.timer}
                        //on Finish call
                        onFinish={() => alert('Nice Work! Time for next Set')}
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
                    <Button
                        onPress={(time) => this.enterDurationEventHandler(time)}
                        title="Customize Timer"
                    />
                    <TextInput
                        placeholder="Enter Number of Minutes"
                        underlineColorAndroid='transparent'
                        style={timerStyles.TextInputStyle}
                        // keyboardType='numeric'
                        maxLength='2'
                        onChangeText={(time) => this.typeDurationEventHandler(time)}
                        // onSubmitEditing = {(time) => this.enterDurationEventHandler(time)}
                    /> 
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
        marginBottom: 10
    } ,
});