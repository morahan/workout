// example workout app

// let user = {
//   firstName: "Michael",
//   lastName: "Morahan",
//   weight: 150,
//   days: "All",
//   favoriteWorkOut: "upperBody"
// };


let workout = {
  calisthenics: {
    upperBody:{
      1: {
        id: 1,
        name: "Push Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: {
        id: 2,
        name: "Cobra Wings",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/yGJZTK257k0?t=61",
        available: true,
      },
      3: {
        id: 3,
        name: "Superman Waves",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/yGJZTK257k0?t=185",
        available: true,
      },
      4: {
        id: 4,
        name: "Pull Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        id: 5,
        name: "Chin Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        id: 6,
        name: "Dips",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        id: 7,
        name: "Ineverted Row / Front Lever",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/XZV9IwluPjw?t=53",
        available: true,
      },
      8: {
        id: 8,
        name: "Head Stand",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        id: 9,
        name: "Arm Circles",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      10: {
        id: 10,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
    },
    lowerBody: {
      1: {
        // id: 11,
        name: "Forward Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: {
        // id: 11,
        name: "Jump Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: {
        // id: 11,
        name: "Squats",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      4: {
        // id: 11,
        name: "Jump Squats",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        // id: 11,
        name: "Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      8: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      10: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
    },
    core: {
      1: {
        // id: 11,
        name: "Plank",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: {
        // id: 11,
        name: "Jumping Jacks",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: {
        // id: 11,
        name: "Sit Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      4: {
        // id: 11,
        name: "Bicycles",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        // id: 11,
        name: "Burpees",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        // id: 11,
        name: "Jump Rope",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        // id: 11,
        name: "Leg Lifts",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      8: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      10: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
    },
  },
  upperBody: {
    description: "Back and Biceps",
    days: ["Monday", "Wednesday", "Friday"],
    exercises: {
      1: {
        // id: 1,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Curls",
        weight: 25,
        incrementLbs: 5,
        reps: 34,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: { 
        // id: 2,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name:  "Shoulder Press",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: { 
        // id: 3,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Bench Press",
        weight: 120,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      4: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Chest Flys",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      5: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Dips",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      6: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Pushups",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      7: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Skull Crushers",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      8: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Arm Extensions",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      9: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Pull-ups",
        weight: 'body',
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      10: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Rows",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      11: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Renegade Rows",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      12: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Dumbbell Single Arm Row",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      13: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Chest-Supported Dumbbell Row",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "https://youtu.be/H75im9fAUMc?t=36",
      },
      14: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "NO MORE EXERCISES",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
    }
  },
  lowerBody: {
    days: ["Tuesday", "Thursday"],
    exercises: {
      1: { 
        // id: 4,
        muscleGroups: [gluteal, quadriceps, hamstrings],
        detailedMuscleDescription: "",
        name: "Lunges",
        weight: "Body Weight",
        incrementLbs: null,
        reps: 12,
        sets: 3,
        infoUrl: "",
      },
      2: { 
        // id: 5,
        muscleGroups: [gluteal, quadriceps, hamstrings],
        detailedMuscleDescription: "Quadriceps inclued rectus femoris, the vastus lateralis, the vastus medialis, and the vastus intermedius",
        name: "Leg Extension",
        weight: 65,
        incrementLbs: 5,
        reps: 23,
        sets: 3,
        infoUrl: "",
      },
      3: { 
        // id: 6,
        muscleGroups: [gluteal, quadriceps, hamstrings],
        detailedMuscleDescription: "",
        name: "Leg Press",
        weight: 100,
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      4: { 
        // id: 6,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Squats",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      5: { 
        // id: 6,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Reverse Lunges",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      6: { 
        // id: 6,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Side Lunges",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      7: { 
        // id: 6,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Skaters",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      8: { 
        // id: 6,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Pulsing Lunges",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      9: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "NO MORE EXERCISES",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
    }
  },
  core: {
    days: ["Saturday", "Sunday"],
    exercises: {
      1: { 
        // id: 7,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Sit-Ups",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: { 
        // id: 7,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Crunches",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: {
        // id: 8,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Leg Lifts",
        weight: "body-weight",
        incrementLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      4: {
        // id: 9,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Plank",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        // id: 9,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Bicycles",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        // id: 9,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Bear Crawl",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        // id: 9,
        name: "Mountain Climbers",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      8: {
        // id: 9,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "Leg Circles",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        // id: ?,
        muscleGroups: [],
        detailedMuscleDescription: "",
        name: "NO MORE EXERCISES",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        available: true,
      },
    }
  },
  workOutList: {
    upperBodyList: [workout.upperBody.exercises[1], workout.upperBody.exercises[2], workout.upperBody.exercises[3], workout.upperBody.exercises[4], workout.upperBody.exercises[5], workout.upperBody.exercises[6], workout.upperBody.exercises[7], workout.upperBody.exercises[8], workout.upperBody.exercises[9], workout.upperBody.exercises[10], workout.upperBody.exercises[11], workout.upperBody.exercises[12], workout.upperBody.exercises[13]],
    lowerBodyList: [workout.upperBody.exercises[1], workout.upperBody.exercises[2], workout.upperBody.exercises[3], workout.upperBody.exercises[4], workout.upperBody.exercises[5], workout.upperBody.exercises[6], workout.upperBody.exercises[7], workout.upperBody.exercises[8], workout.upperBody.exercises[9], workout.upperBody.exercises[10], workout.upperBody.exercises[11], workout.upperBody.exercises[12], workout.upperBody.exercises[14]],
    coreList: [workout.core.exercises[1], workout.core.exercises[2], workout.core.exercises[3], workout.core.exercises[4], workout.core.exercises[5], workout.core.exercises[6], workout.core.exercises[7], workout.core.exercises[8], workout.core.exercises[9]],
    favorites: [],

  },

};

export default workout;
