import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <CountDown
                        // background of timer
                        digitStyle={{backgroundColor: '#44ace8'}}
                        //duration of countdown in seconds
                        until={this.state.totalDuration}
                        //formate to show
                        timetoShow={('M', 'S')}
                        //on Finish call
                        onFinish={() => alert('Nice Work! Time for next Set')}
                        //on Press call
                        onPress={() => alert('Pump It!')}
                        // size of component
                        size={50}
                        // Play Pause
                        running={this.state.sessionInProgress}
                    />
                </View>
                {!this.state.sessionInProgress &&
                    <TouchableOpacity style={styles.startButton} onPress={this.startSession}>
                        <Text style={styles.colorWhite}>Continue Session</Text>
                    </TouchableOpacity>
                }
                {this.state.sessionInProgress &&
                    <TouchableOpacity style={styles.stopButton} onPress={this.stopSession}>
                        <Text style={styles.colorWhite}>Stop Session</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
    timer: {
        fontSize: 80,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    startButton: {
        margin: 40,
        padding: 40,
        backgroundColor: '#44ace8',
        width: '80%',
        alignSelf: 'center',
        borderRadius: '37px'
    },
    stopButton: {
        margin: 40,
        padding: 40,
        backgroundColor: '#44ace8',
        width: '80%',
        borderRadius: '37px',
    },
    colorWhite: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 26
    },
    header: {
        position: 'absolute',
        top: 0,
        height: 60,
        width: '100%',
        backgroundColor: '#44ace8'
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        paddingTop: 15,
        paddingLeft: 10,
        textAlign: 'center'
    },

});