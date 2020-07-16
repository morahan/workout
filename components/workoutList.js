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
        // id: 1,
        name: "Push Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      2: {
        // id: 2,
        name: "Cobra Wings",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/yGJZTK257k0?t=61",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      3: {
        // id: 3,
        name: "Superman Waves",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/yGJZTK257k0?t=185",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      4: {
        // id: 4,
        name: "Pull Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        // id: 5,
        name: "Chin Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      6: {
        // id: 6,
        name: "Dips",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      7: {
        // id: 7,
        name: "Ineverted Row / Front Lever",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/XZV9IwluPjw?t=53",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      8: {
        // id: 8,
        name: "Head Stand",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      9: {
        // id: 9,
        name: "Arm Circles",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      10: {
        // id: 10,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
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
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      2: {
        // id: 11,
        name: "Jump Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      3: {
        // id: 11,
        name: "Squats",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      4: {
        // id: 11,
        name: "Jump Squats",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      5: {
        // id: 11,
        name: "Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      6: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      7: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      8: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      9: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      10: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
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
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      2: {
        // id: 11,
        name: "Jumping Jacks",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      3: {
        // id: 11,
        name: "Sit Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      4: {
        // id: 11,
        name: "Bicycles",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      5: {
        // id: 11,
        name: "Burpees",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      6: {
        // id: 11,
        name: "Jump Rope",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      7: {
        // id: 11,
        name: "Leg Lifts",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      8: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      9: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      10: {
        // id: 11,
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
    },
  },
  upperBody: {
    groups: {
      1: {
        description: "Back and Biceps",
        ex: [1, 9, 10, 11, 12, 13, 14],
      },
      2: {
        description: "Chest and Triceps",
        ex: [2, 3, 4, 5, 6, 7, 8],
      },
    },
    days: ["Monday", "Wednesday", "Friday"],
    exercises: {
      1: {
        id: 1,
        name: "Curls",
        muscleGroups: [],
        detailedMuscleDescription: "",
        weight: 25,
        // incrementWeight: 5,
        reps: 34,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/weights/Curls.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      2: { 
        id: 2,
        name:  "Shoulder Press",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/weights/ShoulderPress.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      3: { 
        id: 3,
        name: "Bench Press",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 120,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/weights/BenchPress.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: true,
          3.1: {
            id: 3.1,
            name: "Bench Press Dumbell",
            muscleGroups: [],
            // detailedMuscleDescription: "",
            dumbellWeight: 45,
            // weight: 120,
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: "",
            available: true,
            alternate: false,
          // switchSides: true,
          // switchAfter: 30,
          },
          3.2: {
            id: 3.2,
            name: "Inclined Bench Press",
            muscleGroups: [],
            // detailedMuscleDescription: "",
            weight: 120,
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: "../assets/gifs/weights/BenchPressIncline.gif",
            available: true,
            alternate: false,
          // switchSides: true,
          // switchAfter: 30,
          },
          3.3: {
            id: 3.3,
            name: "Inclined Bench Press Dumbbell",
            muscleGroups: [],
            // detailedMuscleDescription: "",
            dumbellWeight: 45,
            // weight: 120,
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: "../assets/gifs/weights/BenchPressInclineDumbbell.gif",
            available: true,
            alternate: false,
          // switchSides: true,
          // switchAfter: 30,
          },
        }
      },
      4: {
        id: 4,
        name: "Chest Flys",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      5: {
        id: 5,
        name: "Dips",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      6: {
        id: 6,
        name: "Pushups",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      7: {
        id: 7,
        name: "Skull Crushers",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      8: {
        id: 8,
        name: "Arm Extensions",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      9: {
        id: 9,
        name: "Pull-ups",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 'body',
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      10: {
        id: 10,
        name: "Rows",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },      
      11: {
        id: 11,
        name: "Renegade Rows",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/weights/RenegadeRow.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      12: {
        id: 12,
        name: "Dumbbell Single Arm Row",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "DumbbellSingleArmRow.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      13: {
        id: 13,
        name: "Chest-Supported Dumbbell Row",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "https://youtu.be/H75im9fAUMc?t=36",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      14: {
        id: 14,
        name: "Cable Curls",
        muscleGroups: ["bicepts"],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "https://youtu.be/H75im9fAUMc?t=36",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },


      15: {
        // id: ?,
        name: "NO MORE EXERCISES",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
    }
  },
  lowerBody: {
    groups: {
      1: {
        description: "Quadriceps and Gluteal",
        ex: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      2: {
        description: "Hamstrings and Calves",
        ex: [9, 10, 11, 12, 13, 14, 15],
      },
    },
    days: ["Tuesday", "Thursday"],
    exercises: {
      1: { 
        // id: 4,
        name: "Lunges",
        muscleGroups: ["gluteal", "quadriceps", "hamstrings"],
        // detailedMuscleDescription: "",
        weight: "Body Weight",
        // incrementWeight: null,
        reps: 12,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      2: { 
        // id: 5,
        name: "Leg Extension",
        muscleGroups: ["quadriceps"],
        // detailedMuscleDescription: "Quadriceps inclued rectus femoris, the vastus lateralis, the vastus medialis, and the vastus intermedius",
        weight: 65,
        // incrementWeight: 5,
        reps: 23,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      3: { 
        // id: 6,
        name: "Leg Press",
        muscleGroups: ["gluteal", "quadriceps", "hamstrings"],
        // detailedMuscleDescription: "",
        weight: 100,
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      4: { 
        // id: 6,
        name: "Squats",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      5: { 
        // id: 6,
        name: "Reverse Lunges",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      6: { 
        // id: 6,
        name: "Side Lunges",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      7: { 
        // id: 6,
        muscleGroups: [],
        name: "Skaters",
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      8: { 
        // id: 6,
        muscleGroups: [],
        switchSides: true,
        name: "Pulsing Lunges",
        switchAfterTime: 30,
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      9: { 
        // id: 6,
        name: "Leg Curls",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      10: { 
        // id: 6,
        name: "Swiss Ball Hamstring Curl",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      11: { 
        // id: 6,
        name: "Single-leg Swiss Ball Hamstring Curl",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      12: { 
        // id: 6,
        name: "Calf Raises",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/calisthenics/CalfRaises.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      13: { 
        // id: 6,
        name: "Glute Bridge",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/calisthenics/GluteBridge.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      14: { 
        // id: 6,
        name: "Glute Bridge March",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/calisthenics/GluteBridgeMarch.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      15: { 
        // id: 6,
        name: "Glute Bridge - Single Leg",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/calisthenics/GluteBridgeSingleLeg.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      16: { 
        // id: 6,
        name: "Romanian Dumbbell lift",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: "body",
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: "../assets/gifs/calisthenics/CalfRaises.gif",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },



      17: {
        // id: ?,
        name: "NO MORE EXERCISES",
        muscleGroups: [],
        // detailedMuscleDescription: "",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        
      },
    }
  },
  core: {
    days: ["Saturday", "Sunday"],
    groups: {
      1: {
        description: "Core pt. 1",
        ex: [1, 2, 3, 4],
      },
      2: {
        description: "Core pt. 2",
        ex: [5, 6, 7, 8],
      },
    },
    exercises: {
      1: { 
        // id: 7,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Sit-Ups",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      2: { 
        // id: 7,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Crunches",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      3: {
        // id: 8,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Leg Lifts",
        weight: "body-weight",
        // incrementWeight: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      4: {
        // id: 9,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Plank",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      5: {
        // id: 9,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Bicycles",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      6: {
        // id: 9,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Bear Crawl",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
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
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      8: {
        // id: 9,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "Leg Circles",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
      9: {
        // id: ?,
        muscleGroups: [],
        // detailedMuscleDescription: "",
        name: "NO MORE EXERCISES",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
      },
    }
  },
  // workoutList: function() {
  //   let upperBodyList = [this.upperBody.exercises[1], this.upperBody.exercises[2], this.upperBody.exercises[3], this.upperBody.exercises[4], this.upperBody.exercises[5], this.upperBody.exercises[6], this.upperBody.exercises[7], this.upperBody.exercises[8], this.upperBody.exercises[9], this.upperBody.exercises[10], this.upperBody.exercises[11], this.upperBody.exercises[12], this.upperBody.exercises[13]];
  //   let lowerBodyList = [this.upperBody.exercises[1], this.upperBody.exercises[2], this.upperBody.exercises[3], this.upperBody.exercises[4], this.upperBody.exercises[5], this.upperBody.exercises[6], this.upperBody.exercises[7], this.upperBody.exercises[8], this.upperBody.exercises[9], this.upperBody.exercises[10], this.upperBody.exercises[11], this.upperBody.exercises[12], this.upperBody.exercises[14]];
  //   let coreList = [this.core.exercises[1], this.core.exercises[2], this.core.exercises[3], this.core.exercises[4], this.core.exercises[5], this.core.exercises[6], this.core.exercises[7], this.core.exercises[8], this.core.exercises[9]];
  //   let favorites = [];
  //   // console.log("Inside and working! = ", this.upperBody.exercises[1])
  //   // test: this.workout.upperBody.exercises[1].name
  // },
};

// workout.workoutList();
export default workout;
