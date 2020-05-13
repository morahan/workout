import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        //initialize the counter duration
        this.state = {
            totalDuration: '120',
            sessionInProgress: true
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

    render() {
        console.log(this.state.totalDuration);
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
});