import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
export default class App extends Component {
    constructor(props) {
        super(props);
        //initialize the counter duration
        this.state = {
            totalDuration: '100',
            sessionInProgress: false
        };
    }

    componentDidMount() {
        var that = this;

        //We are showing the coundown timer for a given expiry date-time
        //If you are making an quize type app then you need to make a simple timer
        //which can be done by using the simple like given below
        //that.setState({ totalDuration: 30 }); //which is 30 sec

        var date = moment()
            .utcOffset('+07:00')
            .format('YYYY-MM-DD hh:mm:ss');
        //Getting the current date-time with required formate and UTC   

        var expirydate = '2020-10-23 04:00:45';//You can set your own date-time
        //Let suppose we have to show the countdown for above date-time 

        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        //difference of the expiry date-time given and current date-time

        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());

        that.setState({ totalDuration: 30 });
        //Settign up the duration of countdown in seconds to re-render
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
                        onFinish={() => alert('finished')}
                        //on Press call
                        onPress={() => alert('hello')}
                        // size of component
                        size={50}
                    />
                </View>
                {!this.state.sessionInProgress &&
                    <TouchableOpacity style={styles.beginButton} onPress={this.beginSession}>
                        <Text style={styles.colorWhite}>Begin Session</Text>
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
    beginButton: {
        margin: 40,
        padding: 40,
        backgroundColor: '#44ace8',
        width: '80%',
        alignSelf: 'center',
        borderRadius: '17px'
    },
    stopButton: {
        margin: 40,
        padding: 40,
        backgroundColor: '#F44336',
        width: '80%',
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