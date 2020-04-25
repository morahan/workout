/*This is an example of CountDown Timer*/
import React, { Component } from 'react';
//import React in our project

import { View } from 'react-native';
//import all the component we need in our project

import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer

import moment from 'moment';
//import moment to help you play with date and time


//  Manal Timer
// class TimerInput extends React.Component {
//     render() {
//         return (
//             <View style={{ marginLeft: 100 }}>
//                 <h3>Input your desired time</h3>
//                 <input type="number" minutes={this.props.minutes} required />
//             </View>
//         );
//     }
// }
// class Timer extends React.Component {
//     render() {
//         return (
//             <View>
//                 <h1 style={{ fontSize: 100, marginLeft: 100 }}>{this.props.minutes}:{this.props.seconds}
//                 </h1>
//             </View>
//         );
//     }
// }
// class StartButton extends React.Component {
//     render() {
//         return (
//             <View style={{ marginLeft: 130 }}>
//                 <button onClick={this.props.startCountDown}>Start</button>
//             </View>
//         );
//     }
// }
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             seconds: '00',
//             minutes: ''
//         }
//         this.secondsRemaining;
//         this.intervalHandle;
//         this.handleChange = this.handleChange.bind(this);
//         // method that triggers the countdown functionality
//         this.startCountDown = this.startCountDown.bind(this);
//         this.tick = this.tick.bind(this);
//     }
//     handleChange(event) {
//         this.setState({
//             minutes: event.target.value
//         })
//     }
//     tick() {
//         var min = Math.floor(this.secondsRemaining / 60);
//         var sec = this.secondsRemaining - (min * 60);
//         this.setState({
//             minutes: min,
//             seconds: sec
//         })
//         if (sec < 10) {
//             this.setState({
//                 seconds: "0" + this.state.seconds,
//             })
//         }
//         if (min < 10) {
//             this.setState({
//                 value: "0" + min,
//             })
//         }
//         if (min === 0 & sec === 0) {
//             clearInterval(this.intervalHandle);
//         }
//         this.secondsRemaining--
//     }
//     startCountDown() {
//         this.intervalHandle = setInterval(this.tick, 1000);
//         let time = this.state.minutes;
//         this.secondsRemaining = time * 60;
//     }
// }

export default class Timer extends Component {
    constructor(props) {
        super(props);
        //initialize the counter duration
        this.state = {
            totalDuration: '',
        };
    }

    componentDidMount() {
        var that = this;

        //We are showing the coundown timer for a given expiry date-time
        //If you are making an quize type app then you need to make a simple timer
        //which can be done by using the simple like given below
        //that.setState({ totalDuration: 30 }); //which is 30 sec

        var date = moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss');
        //Getting the current date-time with required formate and UTC   

        var expirydate = '2020-05-23 04:00:45';//You can set your own date-time
        // let curTime: new Date().toLocaleString()

        //Let suppose we have to show the countdown for above date-time 

        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        //difference of the expiry date-time given and current date-time

        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());

        var d = hours * 60 * 60 + minutes * 60 + seconds;
        //converting in seconds

        that.setState({ totalDuration: d });
        //Settign up the duration of countdown in seconds to re-render
    }

    render() {
        console.log(this.state.totalDuration);
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <CountDown
                    until={this.state.totalDuration}
                    //duration of countdown in seconds
                    timetoShow={('M', 'S')}
                    //formate to show
                    onFinish={() => alert('finished')}
                    //on Finish call
                    onPress={() => alert('hello')}
                    //on Press call
                    size={20}
                />
            </View>
        );
    }
}