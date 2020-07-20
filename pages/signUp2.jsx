import React, { Component } from "react";
import {Text, View, TextInput, TouchableOpacity, Image, useState} from "react-native";
import styles from "../styles/styles.js";
import workout from "../components/workoutList.js";
const moment = require("moment");

const [currentDay, setCurrentDay] = moment().format("dddd");
const [target, setTarget] = "";

function  SignUp2(props) {
    const [message, setMessage] = useState("Sign Up Below");
    const [name, setName] = useState('');
    const [step, setStep] = useState(0);
    const [tempName, setTempName] = useState('');

  pressSignUpHandler = () => {
    setMessage("Welcome!")
    setName(tempName)
    setStep(1)
  };

  pressStartHandler = (props) => {
    let setTargetMuscles = function () {
      if (workout.upperBody.days.includes(currentDay)) {
        target = "upperBody";
      }
      if (workout.lowerBody.days.includes(currentDay)) {
        target = "lowerBody";
      }
      if (workout.core.days.includes(currentDay)) {
        target = "core";
      }
    };
    setTargetMuscles();

    // pass through desired target muscles based on day
    props.navigation.navigate("Workout", { day: target });
  };

  pressCustomizeHandler = () => {
    console.log(props.navigation.navigate, "=== signUp.js, navigate to customize workout (displayTags.js) ===="
    );
    props.navigation.navigate("DisplayTags");
  };

  render() {
    if (step === 0) {
      return (
        <View style={styles.Screen}>
          <View>
            <Image
              source={require("../assets/fl-icon.png")}
              style={{ height: 117, width: 117, alignSelf: "center" }}
            />
            <Text style={styles.cta2}>{message}</Text>
            <Text style={styles.cta2}>{name}</Text>
          </View>
          <View></View>

          <View style={styles.LogIn}>
            <TextInput
              placeholder="your name"
              style={styles.Input2}
              onChangeText={(text) => setTempName(text)}
            ></TextInput>
            <TouchableOpacity
              style={styles.Btn}
              onPress={pressSignUpHandler}
            >
              <Text style={styles.WText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
          </View>
        </View>
      );
    }
    if (step === 1) {
      return (
        <View style={styles.Screen}>
          <View>
            <Image
              source={require("../assets/fl-icon.png")}
              style={{ height: 117, width: 117, alignSelf: "center" }}
            />
          </View>
          <View>
            <Text style={styles.cta2}>{message}</Text>
            <Text style={styles.cta2}>{name}</Text>
          </View>

          <View style={styles.LogIn}>
            <TouchableOpacity onPress={pressCustomizeHandler}>
              <Text style={styles.Text} day={target}>
                Customize
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Btn}
              onPress={pressStartHandler}
            >
              <Text style={styles.WText} day={target}>
                Start Now
              </Text>
              {/* <Text style={styles.WText}>Start Now</Text> */}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
          </View>
        </View>
      );
    }
  }
}