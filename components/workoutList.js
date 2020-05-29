// example workout app

let user = {
  firstName: "Michael",
  lastName: "Morahan",
  weight: 150,
  days: "All",
  favoriteWorkOut: "upperBody"
};

let workout = {
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
      },
      2: { 
        // id: 2,
        name:  "Shoulder Press",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
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
      }
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
    }
  },
  core: {
    days: ["Saturday", "Sunday"],
    exercise: {
      1: { 
        // id: 7,
        name: "Sit-Ups",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3,
      },
      2: { 
        // id: 7,
        name: "Crunches",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3,
      },
      3: {
        // id: 8,
        name: "Leg Lifts",
        weight: "body-weight",
        incrementLbs: null,
        reps: 53,
        sets: 3,
      },
      4: {
        // id: 9,
        name: "Plank",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
      },
      5: {
        // id: 9,
        name: "Bicycles",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
      },
      6: {
        // id: 9,
        name: "Bear Crawl",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
      },
      7: {
        // id: 9,
        name: "Mountain Climbers",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
      },
      8: {
        // id: 9,
        name: "Leg Circles",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 1,
        sets: 3,
      },
    }
  }
};

export default workout;
