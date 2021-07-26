import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { greaterThan } from 'react-native-reanimated';
import styles from '../styles/styles.js';
import { Audio } from 'expo-av';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        // initialize the counter duration
        this.state = {
            tempTime: '',
            totalDuration: "",
            restTime: this.props.restTime,
            currentDuration: 120,
            sessionInProgress: true,
            // restCount: 0,
        };
        this.timerFinishEventHandler = this.timerFinishEventHandler.bind(this);
    }

    async componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActicveInBackground: true,
            playsThroughEarpieceAndroid: true,
        })

        this.sound = new Audio.Sound();

        const status = {
            shouldPlay: false
        }

        this.sound.loadAsync(require('../assets/audio/ChaChing.mp3'), status, false);
    }

    playSound() {
        this.sound.playAsync();
        //  this.sound.setPosition.async = 0;
    };

    stopSession = () => {
        alert("You completed " + this.props.completedE + " Exercises,  " + this.props.completedR + " Rounds, and " + this.props.completedS + " Super Sets. Nice Work!")
        this.setState({
            sessionInProgress: false,
        }, () => console.log("==== Stopped ===="))
    }
  
    startSession = () => {
        this.setState({
            sessionInProgress: true,
        })
    }

    // typeDurationEventHandler(time){
    //     let newDuration = '';
    //     let numbers = '0123456789';
    //     for (var i = 0; i < time.length; i++) {
    //         if (numbers.indexOf(time[i]) > -1) {
    //             newDuration = newDuration + time[i];
    //         }
    //         else {
    //             alert("please enter numbers only");
    //         }
    //     }
    //     this.setState({ tempTime: newDuration*3 }, () => {
    //         console.log("temp time === ", this.state.tempTime)
    //     });
    // }

    // enterDurationEventHandler(time){        
    //     this.setState({ currentDuration: this.state.tempTime }, () => {
    //         console.log("Total Duration === ", this.state.totalDuration)
    //     });
    // }

    timerFinishEventHandler = () => {
        this.playSound()
        // if (this.state.completedExercises === this.state.restCount){
        //     this.setState({ finishCount: this.state.finishCount += 1, totalDuration: 15}, () => console.log("finishCount === ", this.state.finishCount, "restCount === ", this.state.restCount))
        // } else {
        //     this.setState({ restCount: this.state.restCount += 1, totalDuration: 30}, () => console.log("finishCount else === ", this.state.finishCount, "restCount else === ", this.state.restCount))
        // }
    }

    render() {
        return (
            <View style={timerStyles.container}>
                <View>
                    <CountDown
                        // background of timer
                        digitStyle={timerStyles.digitBox}
                        //duration of countdown in seconds
                        until={this.state.currentDuration}
                        //formate digits to show
                        timeToShow={['M', 'S']}
                        // format lables for digits
                        timeLabels={{m: 'Min', s: 'Sec'}}
                        
                        style={timerStyles.timer}
                        //on Finish call
                        onFinish={this.timerFinishEventHandler}
                        // onFinish={() => alert('Nice Work! Time for next Set')}
                        //on Press call
                        onPress={() => {this.playSound(); alert('Pump It!')}}
                        // size of duration Text
                        size={23}
                        // Play Pause
                        running={this.state.sessionInProgress}
                        // Digit Text Styling
                        digitTxtStyle={timerStyles.digitText}
                    />
                </View>
                {/* === Customize timer */}
                {/* <View>
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
                       
                </View> */}

                {!this.state.sessionInProgress &&
                    <TouchableOpacity style={styles.BtnStop} onPress={this.startSession}>
                        <Text style={timerStyles.textWhite}>Continue Session</Text>
                    </TouchableOpacity>
                }
                {this.state.sessionInProgress &&
                    <TouchableOpacity style={styles.BtnStart} onPress={this.stopSession}>
                        <Text style={timerStyles.textWhite}>Stop Session</Text>
                        {/* <Text style={timerStyles.textWhite}>Stop Session</Text> */}
                    </TouchableOpacity>
                }
            </View>
        );
    }
}


const timerStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height: "35%",
        // backgroundColor: "blue",
        borderRadius: 17,
    },

    timer: {
        width: "100%",
        // paddingTop: "3%",
        // backgroundColor: "whitesmoke",
        borderRadius: 17,
    },

    digitBox: {
        backgroundColor: 'black',
        marginTop: '15%',
        marginLeft: '3%',
        marginRight: '3%',
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    digitText: {
        backgroundColor: 'black',
        color: "white",
        fontSize: 17,
    },

    // startButton: {
    //     // marginTop: "3%",
    //     justifyContent: "center",
    //     width: "75%",
    //     height: "50%",
    //     alignSelf: "center",
    //     backgroundColor: "black",
    //     borderRadius: 13,
    //     backgroundColor: "green"
    // },

    // stopButton: {
    //     justifyContent: "center",
    //     width: "75%",
    //     height: "10%",
    //     alignSelf: "center",
    //     backgroundColor: "black",
    //     borderRadius: 13,
    // },

    // customizeBtn: {
    //     justifyContent: "center",
    //     width: "35%",
    //     height: "7%",
    //     justifyContent: "center",
    //     alignSelf: "center",
    //     backgroundColor: "green",
    //     borderRadius: 17,
    //     margin: "3%",
    // },

    textWhite: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    },

    textBlack: {
        textAlign: 'center',
        color: '#000',
        fontSize: 17
    },

    // TextInputStyle: {
    //     textAlign: 'center',
    //     height: "5%",
    //     borderRadius: 10,
    //     borderWidth: 2,
    //     borderColor: '#009688',
    //     marginBottom: 0,
    // },
});