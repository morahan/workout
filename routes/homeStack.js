import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from '../pages/Welcome.js';
import GetStarted from '../pages/getStarted.js';
import SetWorkout from '../pages/setWorkout.js';
import SignIn from '../pages/signIn.js';
import SignUp from '../pages/signUp.js';
import Workout from '../pages/workout.js';


const screens = {
    Welcome: {
        screen: Welcome
    },
    GetStarted: {
        screen: GetStarted
    },
    CustomizeWorkout: {
        screen: SetWorkout
    },
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    },
    Workout: {
        screen: Workout
    }


}


const HomeStack = createStackNavigator(screens)

