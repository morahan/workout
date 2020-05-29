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
    exercises: [
      { id: 1,
        name: "Curls",
        weight: 25,
        incrementLbs: 5,
        reps: 34,
        sets: 3,
        infoUrl: "",
      },
      { id: 2,
        name:  "Shoulder Press",
        weight: 40,
        reps: 13,
        sets: 3,
        infoUrl: "",
      },
      { id: 3,
        name: "Bench Press",
        weight: 120,
        reps: 13,
        sets: 3,
        infoUrl: "",
      }
    ]
  },
  lowerBody: {
    days: ["Tuesday", "Thursday"],
    exercises: [
      { id: 3,
        name: "Lunges",
        weight: "Body Weight",
        incrementLbs: null,
        reps: 12,
        sets: 3,
        infoUrl: "",
      },
      { id: 4,
        name: "Leg Extension",
        weight: 65,
        incrementLbs: 5,
        reps: 23,
        sets: 3,
        infoUrl: "",
      },
      { id: 4,
        name: "Leg Press",
        weight: 100,
        incrementLbs: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
      }
    ]
  },
  core: {
    days: ["Saturday", "Sunday"],
    exercise: [
      { id: 5,
        name: "Sit-Ups",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3
      },
      {
        id: 6,
        name: "Leg Lifts",
        incrementLbs: null,
        reps: 53,
        sets: 3
      },
      {
        id: 7,
        name: "Plank",
        incrumentLbs: null,
        reps: 1,
        sets: 3
      }
    ]
  }
};

export default workout;
