import workout from './workoutList.js';



let customWorkouts = {
    calisthenics: {
        upperBody: [],
        lowerBody: [],
        core: [],
    },
    upperBody: {
        description: "Back and Biceps",
        days: [],
        exercises: [
            {
                group1: {
                    description: "Back and Bi's",
                    days: [],
                    exercises: [],
                },
            },
            {
                group2: {
                    description: "Chest and Tri's",
                    days: [],
                    exercises: [],
                },
            }
        ]
    },
    lowerBody: {
        days: [],
        exercises: []
    },
    core: {
        days: ["Saturday", "Sunday"],
        exercises: []
    },
    // workoutList: function () {
    //     let upperBodyList = [workout.upperBody.exercises[1], workout.upperBody.exercises[2], workout.upperBody.exercises[3], workout.upperBody.exercises[4], workout.upperBody.exercises[5], workout.upperBody.exercises[6], workout.upperBody.exercises[7], workout.upperBody.exercises[8], workout.upperBody.exercises[9], workout.upperBody.exercises[10], workout.upperBody.exercises[11], workout.upperBody.exercises[12], workout.upperBody.exercises[13]];
    //     let lowerBodyList = [workout.upperBody.exercises[1], workout.upperBody.exercises[2], workout.upperBody.exercises[3], workout.upperBody.exercises[4], workout.upperBody.exercises[5], workout.upperBody.exercises[6], workout.upperBody.exercises[7], workout.upperBody.exercises[8], workout.upperBody.exercises[9], workout.upperBody.exercises[10], workout.upperBody.exercises[11], workout.upperBody.exercises[12], workout.upperBody.exercises[14]];
    //     let coreList = [workout.core.exercises[1], workout.core.exercises[2], workout.core.exercises[3], workout.core.exercises[4], workout.core.exercises[5], workout.core.exercises[6], workout.core.exercises[7], workout.core.exercises[8], workout.core.exercises[9]];
    //     let favorites = [];
    //     // console.log("Inside and working! = ", workout.upperBody.exercises[1])
    //     // test: this.workout.upperBody.exercises[1].name
    // },
};

// workout.workoutList();
export default customWorkouts;
