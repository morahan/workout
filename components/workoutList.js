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
        name: "Push Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: {
        name: "Cobra Wings",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/yGJZTK257k0?t=61",
        available: true,
      },
      3: {
        name: "Superman Waves",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/yGJZTK257k0?t=185",
        available: true,
      },
      4: {
        name: "Pull Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        name: "Chin Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        name: "Dips",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        name: "Ineverted Row / Front Lever",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "https://youtu.be/XZV9IwluPjw?t=53",
        available: true,
      },
      8: {
        name: "Head Stand",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        name: "Arm Circles",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      10: {
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
        name: "Forward Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: {
        name: "Jump Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: {
        name: "Squats",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      4: {
        name: "Jump Squats",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        name: "Lunges",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      8: {
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      10: {
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
        name: "Plank",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      2: {
        name: "Jumping Jacks",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: {
        name: "Sit Ups",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      4: {
        name: "Bicycles",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      5: {
        name: "Burpees",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      6: {
        name: "Jump Rope",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      7: {
        name: "Leg Lifts",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      8: {
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      9: {
        name: "",
        weight: "body weight",
        reps: 25,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      10: {
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
    days: ["Monday", "Wednesday", "Friday"],
    exercises: {
      1: {
        // id: 1,
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
        name:  "Shoulder Press",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
        available: true,
      },
      3: { 
        // id: 3,
        name: "Bench Press",
        weight: 120,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      4: {
        // id: ?,
        name: "Chest Flys",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      5: {
        // id: ?,
        name: "Dips",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      6: {
        // id: ?,
        name: "Pushups",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      7: {
        // id: ?,
        name: "Skull Crushers",
        weight: "body",
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      8: {
        // id: ?,
        name: "Arm Extensions",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      9: {
        // id: ?,
        name: "Pull-ups",
        weight: 'body',
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      10: {
        // id: ?,
        name: "Rows",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      11: {
        // id: ?,
        name: "Renegade Rows",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      12: {
        // id: ?,
        name: "Dumbbell Single Arm Row",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      13: {
        // id: ?,
        name: "Chest-Supported Dumbbell Row",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "https://youtu.be/H75im9fAUMc?t=36",
      },
      14: {
        // id: ?,
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
        name: "Lunges",
        weight: "Body Weight",
        incrementLbs: null,
        reps: 12,
        sets: 3,
        infoUrl: "",
      },
      2: { 
        // id: 5,
        name: "Leg Extension",
        weight: 65,
        incrementLbs: 5,
        reps: 23,
        sets: 3,
        infoUrl: "",
      },
      3: { 
        // id: 6,
        name: "Leg Press",
        weight: 100,
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      4: { 
        // id: 6,
        name: "Squats",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      5: { 
        // id: 6,
        name: "Reverse Lunges",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      6: { 
        // id: 6,
        name: "Side Lunges",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      7: { 
        // id: 6,
        name: "Skaters",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      8: { 
        // id: 6,
        name: "Pulsing Lunges",
        weight: "body",
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      },
      9: {
        // id: ?,
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
        name: "NO MORE EXERCISES",
        weight: 25,
        reps: 13,
        sets: 3,
        infoUrl: "",
        available: true,
      },
    }
  }
};

export default workout;
