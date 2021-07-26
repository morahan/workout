import React, { useState } from 'react';
import { Text, View, Image, Modal, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/styles.js';
import Timer from './timer.js';
import workout from './workoutList.js';
import { Audio } from 'expo-av';
import TargetDayContext from "./contexts/targetDay.js";
import FitImage from "react-native-fit-image";


let currentEx = 1;
let currentRound = 1;
let currentSuperSet = 1;
let setInRound = 1;
let roundInSuperSet = 1;
let completedExercises = 0;
let completedRounds = 0;
let completedSuperSets = 0;
let exercisesPerRound = 3;
let roundsPerSuperSet = 3;
let superSetTargetNum = 3;
let defaultNextBtnText = "Next Exercise";
let baseExInRound = 1;

function Exercise(props){
    
    // console.log("exercise.jsx TDcontext.value ==== ", TargetDayContext.consumer);
    // console.log("exercise.jsx props ====2 ", props);
    const [exercise, setExercise] = useState(workout[props.target].exercises[currentEx].name);
    const [reps, setReps] = useState(workout[props.target].exercises[currentEx].reps);
    const [buttonText, setButtonText] = useState("Next Exercise");
    const [modalVisible, setModalVisible] = useState(false);
    const [exerciseGif, setExerciseGif] = useState(workout[props.target].exercises[currentEx].asset);

    // sounds 
    const soundChing = new Audio.Sound();
    const soundChaChing = new Audio.Sound();
    const soundCountMoney = new Audio.Sound();

    const loadAudioSamples = async () => {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActicveInBackground: true,
            playsThroughEarpieceAndroid: true,
        })

        const status = {
            shouldPlay: false
        }

        soundChing.loadAsync(require('../assets/audio/Ching.mp3'), status, false);
        soundChaChing.loadAsync(require('../assets/audio/ChaChing.mp3'), status, false);
        soundCountMoney.loadAsync(require('../assets/audio/CountMoney.mp3'), status, false);
    }
    loadAudioSamples();

    const playChingSound = () => {
        soundChing.replayAsync();
    }

    const playChaChingSound = () => {
        soundChaChing.replayAsync();
    }

    const playCountMoneySound = () => {
        soundCountMoney.replayAsync();
    }

    // track progress of workout
    const nextExerciseEventHandler = () => {

        // iterate next exercise
        completedExercises++;
        currentEx++;

        // Anticipate Next Round - Change Button Text
        if (currentEx % exercisesPerRound === 0) {
            setButtonText("Next Round!")

            // Anticipate Next SuperSet
            if (currentRound % roundsPerSuperSet === 0) {
                setButtonText("Next Super Set!")
            }
        }

        // increment round & reset currentExerciseNum && btnText
        if (completedExercises !== 0 && completedExercises % exercisesPerRound === 0) {
            currentRound++;
            completedRounds++;
            currentEx = baseExInRound;
            roundInSuperSet++;
            setButtonText(defaultNextBtnText)
            console.log("~~~~~ inside here =============")

            // Increment Superset
            if (roundInSuperSet - 1 === roundsPerSuperSet) {
                console.log("~~~~~ increment SS here =============")
                setTimeout(() => { playChaChingSound(); }, 3700);
                playCountMoneySound();
                currentSuperSet++;
                completedRounds++;
                completedSuperSets++;
                currentRound = 1;
                roundInSuperSet = 1;
                baseExInRound = exercisesPerRound * completedSuperSets + 1;
                currentEx = baseExInRound;
                console.log("===== new currentEx =====", currentEx)
            } else {
                playChaChingSound();
            }
        } else {
            playChingSound();
        }

        // Setting Exercise, Reps & Gif
        setExercise(workout[props.target].exercises[currentEx].name);
        setReps(workout[props.target].exercises[currentEx].reps);
        setExerciseGif(workout[props.target].exercises[currentEx].asset);

        // Completed final superset
        if (completedSuperSets === superSetTargetNum) {
            setButtonText("Done!")
            alert("Nice Work! You Completed Your Goal Today!");
        }
        console.log("exercise.js ~", "| compEx =", completedExercises, " | curEx=", currentEx, " | compRounds =", completedRounds, " | curRound=", currentRound, " | compSS =", completedSuperSets, " | curSS =", currentSuperSet, " | SetInRound =", setInRound, " | roundInSS =", roundInSuperSet)
        // console.log("exercise.js ~ Current day ===== ", currentDay)
    }

    // const infoEventHandler = () => {
    //     // console.log('exercise.js - InfoRender -> ')
    //     console.log("exercise.jsx --> info button press - infoURL == ", workout[props.target].exercises[currentEx].infoUrl)
    //     console.log("exercise.jsx --> info button press - Asset == ", workout[props.target].exercises[currentEx].asset)
    //     setModalVisible(!modalVisible)
    //     console.log("exercise.jsx --> info button press - modal Visible == ", modalVisible)
            
    //     if (modalVisible) {
    //         return (
    //           <View style={styles.Box}>
    //             <Modal
    //               animationType="slide"
    //               transparent={true}
    //               visible={modalVisible}
    //               onRequestClose={() =>
    //                 console.log("If you dont know, now you know... Keep Working out")
    //               }
    //             >
    //               <View styles={styles.ModalBackdrop}>
    //                 <View style={styles.ModalBox}>
    //                   <Text styles={styles.HeaderText}> Inside Modal</Text>
    //                 </View>
    //                 {/* ===== display gif below ====  */}
    //                 {/* <View styles={styles.Gif}>
    //                             <Image
    //                             source={{
    //                                 uri: workout[props.target].exercises[currentEx].asset,
    //                             }}
    //                             />
    //                         </View> */}
    //                 <TouchableOpacity
    //                   onPress={() => {
    //                     setModalVisible(!modalVisible);
    //                   }}
    //                 >
    //                   <Text>Close Modal</Text>
    //                 </TouchableOpacity>
    //               </View>
    //             </Modal>
    //             <View>
    //               <TouchableOpacity onPress={() => {setModalVisible(false)}}>
    //                 <Text>Close Modal</Text>
    //               </TouchableOpacity>
    //             </View>
    //           </View>
    //         );
    //     }
    // }
    // console.log("exercise.jsx -> exercise ===== ", exercise)
                    
    return (
      <View style={styles.WorkoutScreen}>
        <Text style={styles.HeaderText}>{"Super Set #" + currentSuperSet}</Text>
        <Text style={styles.HeaderText2}>{"Round " + currentRound}</Text>
        <View style={styles.Box}>
            <View style={styles.EBox}>
                <Text style={styles.Text2}>{exercise}</Text>
                <Text style={styles.Text3}>{reps + " Reps"}</Text>
                
                {/* add i icon for info about each exercise */}
                {/* ==== Modal Below ===  */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.ModalBackdrop}>
                        <View style={styles.ModalBox}>
                            <View style={styles.ModalHeadingArea}>
                                <Text style={styles.ModalSubHeaddingText}>How to do:</Text>
                                <Text style={styles.ModalHeaddingText}>
                                    {workout[props.target].exercises[currentEx].name}
                                </Text>
                            </View>
                            {/* ===== display gif below ====  */}
                            <View style={styles.Gif}>
                                <FitImage
                                    style={styles.FitImage}
                                    source={exerciseGif}
                                />
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => { 
                                        console.log("==== closing Modal now ===== ")  
                                        setModalVisible(false);
                                        }}
                                        style={styles.BtnCloseModal}
                                >
                                    <Text style={styles.WText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                    console.log("====Opening Modal ==== ", exerciseGif)
                    // infoEventHandler()
                }}
                >
                    <Image
                        style={styles.Icon}
                        source={require("../assets/icons/info.png")}
                    />
                </TouchableOpacity>
                {/* <Image></Image> */}
            </View>
            <View style={styles.Btn}>
                <TouchableOpacity>
                <Text style={styles.WText} onPress={nextExerciseEventHandler}>
                    {buttonText}
                </Text>
                {/* <Text style={styles.WText} onPress={() => props.nextExerciseEventHandler(23)}>{state.buttonText}</Text> */}
                </TouchableOpacity>
            </View>
        </View>

        {/* <Text style={styles.Text}>{props.day}</Text> */}
        {/* <TextInput
                placeholder="Enter Duration"
                underlineColorAndroid='transparent'
                style={timerStyles.TextInputStyle}
                keyboardType='numeric'
                maxLength={10} 
                onChangeText={(time) => enterDurationEventHandler(time)}
            />   */}

        <Timer
          restTime="30"
          completedE={completedExercises}
          completedR={completedRounds}
          completedS={completedSuperSets}
        >
          {" "}
        </Timer>
      </View>
    );
}

export default Exercise;

// const timerStyles = StyleSheet.create({
//     TextInputStyle: {
//         textAlign: 'center',
//         height: 40,
//         borderRadius: 17,
//         borderWidth: 2,
//         borderColor: '#009688',
//         marginBottom: 10
//     },
// });