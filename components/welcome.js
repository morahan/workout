import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Picker, Slider, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import styles from '../styles/styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

let clickNumber = 0;
function trackClicks() {
    if (clickNumber === 0) {
        return <Welcome></Welcome>
    } else if (clickNumber === 2) {
        return <SetWorkout></SetWorkout>
    } else if (clickNumber === 3) {
        return <Workout></Workout>
    }
}



function Welcome( { navigation }) {
    const [welcome, setWelcome] = useState('Welcome');
    const [name, setName] = useState('Get Started')
    const clickHandler = () => {
        setWelcome('Welcome Back!');
        setName('Michael');
        clickNumber++;
        console.log(clickNumber)
    }

    return (
        <View style={styles.Screen}>
            <View>
                <Image source={require('../assets/fl-icon.png')} style={{ height: 117, width: 117, alignSelf: "center" }} />
                <Text style={styles.Welcome}>{welcome}</Text>
            </View>
            <View>
                <Text style={styles.cta}>{name}</Text>
            </View>

            <View style={styles.LogIn}>
                <Button style={styles.Btn} title='Sign In' onPress={clickHandler} />
            </View>

            <Button 
                title="Set Workout"
                onPress={() => navigation.push('SetWorkout')}
            />

            <View>
                <Text style={styles.foot}>© Freio Labs, All Rights Reserved</Text>
            </View>
        </View>
    );
}

export default Welcome;




// React NavEx
// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
//     );
// }

// const Stack = createStackNavigator();

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Details" component={DetailsScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App;