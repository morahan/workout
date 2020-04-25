// example workout app

let user = {
  firstName: "Michael",
  lastName: "Morahan",
  weight: 150,
  days: "All",
  favoriteWorkOut: "upperBody"
};

let workOut = {
  upperbody: {
    days: ["Monday", "Wednesday", "Friday"],
    exercises: [
      { id: 1,
        name: "curls",
        weight: 25,
        incrementLbs: 5,
        reps: 34,
        sets: 3
      },
      { id: 2,
        name:  "shoulder press",
        weight: 40,
        reps: 13,
        sets: 3
      },
      { id: 3,
        name: "bench press",
        weight: 120,
        reps: 13,
        sets: 3
      }
    ]
  },
  lowerBody: {
    days: ["Tuesday", "Thursday"],
    exercises: [
      { id: 3,
        name: "lunges",
        weight: "body weight",
        incrementLbs: null,
        reps: 12,
        sets: 3
      },
      { id: 4,
        name: "leg extension",
        weight: 65,
        incrementLbs: 5,
        reps: 23,
        sets: 3
      },
      { id: 4,
        name: "leg press",
        weight: 100,
        incrementLbs: 15,
        reps: 17,
        sets: 3
      }
    ]
  },
  core: {
    days: ["Saturday", "Sunday"],
    exercise: [
      { id: 5,
        name: "sit-ups",
        weight: "body-weight",
        incrumentLbs: null,
        reps: 53,
        sets: 3
      },
      {
        id: 6,
        name: "leg lifts",
        incrementLbs: null,
        reps: 53,
        sets: 3
      }
    ]
  }
};
