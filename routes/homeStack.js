import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// ==== Pages ====
import Welcome from '../pages/welcome.js';
import GetStarted from '../pages/getStarted.js';
import SetWorkout from '../pages/setWorkout.js';
import SignIn from '../pages/signIn.js';
import SignUp from '../pages/signUp.js';
import Workout from '../pages/workout.js';
import DisplayTags from '../components/displayTags.js';
import Confirmation from '../pages/confirmation.js';

const screens = {
    Welcome: {
        screen: Welcome
    },
    GetStarted: {
        screen: GetStarted
    },
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    },
    DisplayTags: {
        screen: DisplayTags
    },
    CustomizeWorkout: {
        screen: SetWorkout
    },
    Confirmation: {
        screen: Confirmation
    },
    Workout: {
        screen: Workout
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

