// let user = {
//   firstName: "Michael",
//   lastName: "Morahan",
//   // weight: 150,
//   days: "All",
//   favoriteWorkout: "upperBody",
//   equipmentOwned: ['',''],
// };

let workout = {
  // calisthenics: {
  //   upperBody:{
  //     1: {
  //       // id: 1,
  //       name: "Push Ups",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/Pushup.gif"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     2: {
  //       // id: 2,
  //       name: "Cobra Wings",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "https://youtu.be/yGJZTK257k0?t=61",
  //       asset: require("../assets/gifs/CobraWIngs.gif"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     3: {
  //       // id: 3,
  //       name: "Superman Waves",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "https://youtu.be/yGJZTK257k0?t=185",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     4: {
  //       // id: 4,
  //       name: "Pull Ups",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       available: true,
  //     },
  //     5: {
  //       // id: 5,
  //       name: "Chin Ups",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     6: {
  //       // id: 6,
  //       name: "Dips",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     7: {
  //       // id: 7,
  //       name: "Ineverted Row / Front Lever",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "https://youtu.be/XZV9IwluPjw?t=53",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     8: {
  //       // id: 8,
  //       name: "Head Stand",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     9: {
  //       // id: 9,
  //       name: "Arm Circles",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     10: {
  //       // id: 10,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //   },
  //   lowerBody: {
  //     1: {
  //       // id: 11,
  //       name: "Forward Lunges",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     2: {
  //       // id: 11,
  //       name: "Jump Lunges",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     3: {
  //       // id: 11,
  //       name: "Squats",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     4: {
  //       // id: 11,
  //       name: "Jump Squats",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     5: {
  //       // id: 11,
  //       name: "Lunges",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     6: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     7: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     8: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     9: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     10: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //   },
  //   core: {
  //     1: {
  //       // id: 11,
  //       name: "Plank",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     2: {
  //       // id: 11,
  //       name: "Jumping Jacks",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     3: {
  //       // id: 11,
  //       name: "Sit Ups",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     4: {
  //       // id: 11,
  //       name: "Bicycles",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     5: {
  //       // id: 11,
  //       name: "Burpees",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     6: {
  //       // id: 11,
  //       name: "Jump Rope",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     7: {
  //       // id: 11,
  //       name: "Leg Lifts",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     8: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     9: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: require("../assets/gifs/"),
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //     10: {
  //       // id: 11,
  //       name: "",
  //       // weight: "body weight",
  //       reps: 25,
  //       sets: 3,
  //       infoUrl: "",
  //       asset: "../assets/gifs/",
  //       available: true,
  //       alternate: false,
  //       // switchSides: true,
  //       // switchAfter: 30,
  //     },
  //   },
  // },
  upperBody: {
    groups: {
      1: {
        description: "Back and Biceps",
        ex: [1, 9, 10],
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
        primaryMuscleGroups: ['biceps'],
        secondaryMuscleGroups: ['back','wrist'],
        equipmentRequired: ['dumbells'],
        equipmentOptions: ["dumbells", "barbell", "curl machine", "rope"],
        detailedMuscleDescription: "Biceps",
        reps: 34,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Curl.gif"),
        available: true,
        alternate: false,
        variations: {
          available: true,
          1.1: {
            id: 14,
            name: "Cable Curls",
            primaryMuscleGroups: ["biceps"],
            secondaryMuscleGroups: ['back','wrist'],
            equipmentRequired: ['cabel weights'],
            equipmentOptions: [''],
            gripAttachements: ['rope grip'],
            reps: 13,
            sets: 3,
            infoUrl: "https://youtu.be/H75im9fAUMc?t=36",
            asset: require("../assets/gifs/CableCurl.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
        }
      },
      2: { 
        id: 2,
        name:  "Shoulder Press",
        primaryMuscleGroups: ['shoulders'],
        secondaryMuscleGroups: ['traps'],
        equipmentRequired: ['dumbells'],
        equipmentOptions: ['shoulder press machine'],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/ShoulderPress.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      3: { 
        id: 3,
        name: "Bench Press",
        primaryMuscleGroups: ['chest', 'front delts'],
        secondaryMuscleGroups: ['triceps'],
        equipmentRequired: ['bench', 'barbell'],
        equipmentOptions: ['bench press machine'],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/BenchPress.gif"),
        available: true,
        alternate: false,
        variations: {
          available: true,
          3.1: {
            id: 3.1,
            name: "Bench Press Dumbbell",
            primaryMuscleGroups: ['chest', 'front delts'],
            secondaryMuscleGroups: ['triceps'],
            equipmentRequired: ['dumbbells', 'bench'],
            equipmentOptions: ['incline bench'],
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/BenchPressDumbbell.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
          3.2: {
            id: 3.2,
            name: "Inclined Bench Press",
            primaryMuscleGroups: ['chest','shoulders'],
            secondaryMuscleGroups: ['traps'],
            equipmentRequired: ['incline bench', 'barbell'],
            equipmentOptions: [''],
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/BenchPressIncline.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
          3.3: {
            id: 3.3,
            name: "Inclined Bench Press Dumbbell",
            primaryMuscleGroups: ['chest','shoulders'],
            secondaryMuscleGroups: ['traps'],
            equipmentRequired: ['dumbbells', 'incline bench'],
            equipmentOptions: [''],
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/BenchPressInclineDumbbell.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
        }
      },
      4: {
        id: 4,
        name: "Chest Flys",
        primaryMuscleGroups: ['chest'],
        secondaryMuscleGroups: ['shoulders'],
        equipmentRequired: ['incline bench', 'dumbbells'],
        equipmentOptions: ['chest fly machine'],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/ChestFly.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      5: {
        id: 5,
        name: "Dips",
        primaryMuscleGroups: ['triceps'],
        secondaryMuscleGroups: ['shoulders'],
        equipmentRequired: ['bench'],
        equipmentOptions: ['dip bar'],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Dip.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      6: {
        id: 6,
        name: "Pushups",
        primaryMuscleGroups: ['chest'],
        secondaryMuscleGroups: ['core'],
        equipmentRequired: [''],
        equipmentOptions: [''],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Pushup.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      7: {
        id: 7,
        name: "Skull Crushers",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: ['dumbbells'],
        equipmentOptions: [''],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/SkullCrusher.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      8: {
        id: 8,
        name: "Arm Extensions",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: ['dumbbells'],
        equipmentOptions: [''],
        eps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/ArmExtension.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      9: {
        id: 9,
        name: "Pull-ups",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: ['pullup bar'],
        equipmentOptions: [''],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Pullup.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      10: {
        id: 10,
        name: "Rows",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: ['cabel weights'],
        equipmentOptions: [''],
        reps: 13,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/CableRow.gif"),
        available: true,
        alternate: false,
        variations: {
          available: true,
          10.1: {
            id: 10.1,
            name: "Renegade Rows",
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [''],
            equipmentRequired: ['dumbbells'],
            equipmentOptions: [''],
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/RenegadeRow.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
          10.2: {
            id: 10.2,
            name: "Dumbbell Single Arm Row",
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [''],
            equipmentRequired: ['dumbbels'],
            equipmentOptions: ['bench'],
            reps: 13,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/DumbbellSingleArmRow.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
          10.3: {
            id: 10.3,
            name: "Chest-Supported Dumbbell Row",
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [''],
            equipmentRequired: ['incline bench', 'dumbbels'],
            equipmentOptions: [''],
            reps: 13,
            sets: 3,
            infoUrl: "https://youtu.be/H75im9fAUMc?t=36",
            asset: require("../assets/gifs/ChestSupportedDumbbellRow.gif"),
            available: true,
            alternate: false,
            variations: {
              available: false,
            }
          },
        }
      },     
      // 15: {
      //   id: 15,
      //   name: "NO MORE EXERCISES",
      //   primaryMuscleGroups: [],
      //   secondaryMuscleGroups: [''],
      //   reps: 0,
      //   sets: 0,
      //   infoUrl: "",
      //   asset: require("../assets/msc/HappyDance.gif"),
      //   available: true,
      //   alternate: false,
      //   // switchSides: true,
      //   // switchAfter: 30,
      // },
    }
  },
  lowerBody: {
    groups: {
      1: {
        description: "Quadriceps and Gluteal",
        ex: [1, 2, 3, 4, 5, 8, 9],
      },
      2: {
        description: "Hamstrings and Calves",
        ex: [6, 7, 9],
      },
    },
    days: ["Tuesday", "Thursday"],
    exercises: {
      1: { 
        id: 1,
        name: "Lunges",
        primaryMuscleGroups: ["gluteal", "quadriceps"],
        secondaryMuscleGroups: ["hamstrings"],
        equipmentRequired: [''],
        equipmentOptions: ['dumbbells'],
        reps: 12,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Lunge.gif"),
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: false,
          1.1: { 
            id: 8,
            name: "Pulsing Lunges",
            primaryMuscleGroups: ["gluteal", "quadriceps"],
            secondaryMuscleGroups: ["hamstrings"],
            equipmentRequired: [''],
            equipmentOptions: ['dumbbells'],
            switchSides: true,
            switchAfterTime: 30,
            reps: 17,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/PulsingLunge.gif"),
            available: true,
            alternate: false,
            // switchSides: true,
            // switchAfter: 30,
            variations: {
              available: false,
            }
          },
          1.2: { 
            id: 5,
            name: "Reverse Lunges",
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [''],
            equipmentRequired: [''],
            equipmentOptions: ['dumbbells'],
            reps: 17,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/ReverseLunge.gif"),
            available: true,
            alternate: false,
            // switchSides: true,
            // switchAfter: 30,
            variations: {
              available: false,
            }
          },
          1.3: { 
            id: 6,
            name: "Side Lunges",
            primaryMuscleGroups: [],
            secondaryMuscleGroups: [''],
            equipmentRequired: [''],
            equipmentOptions: ['dumbbells'],
            reps: 17,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/SideLunge.gif"),
            available: true,
            alternate: false,
            // switchSides: true,
            // switchAfter: 30,
            variations: {
              available: false,
            }
          },
        }
      },
      2: { 
        id: 2,
        name: "Leg Extension",
        primaryMuscleGroups: ["quadriceps"],
        secondaryMuscleGroups: [''],
        equipmentRequired: ['leg extension machine'],
        equipmentOptions: [''],
        // detailedMuscleDescription: "Quadriceps inclued rectus femoris, the vastus lateralis, the vastus medialis, and the vastus intermedius",
        reps: 23,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/LegExtension.gif"),
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: false,
        }
      },
      3: { 
        id: 3,
        name: "Leg Press",
        primaryMuscleGroups: ["gluteal", "quadriceps", "hamstrings"],
        equipmentRequired: ['leg press machine'],
        equipmentOptions: [''],
        // weight: 100,
        // incrementWeight: 15,
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/LegPress.gif"),
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: false,
        }
      },
      4: { 
        id: 4,
        name: "Squats",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: ['dumbbels', 'barbell'],
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Squat.gif"),
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: false,
        }
      },
      5: { 
        id: 5,
        name: "Skaters",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Skater.gif"),
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: false,
        }
      },
      6: { 
        id: 6,
        name: "Leg Curls",
        primaryMuscleGroups: ['Hamstrings'],
        secondaryMuscleGroups: [''],
        equipmentRequired: ['leg curl machine'],
        equipmentOptions: [''],
        reps: 17,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/LegCurl.gif"),
        available: true,
        alternate: false,
        // switchSides: true,
        // switchAfter: 30,
        variations: {
          available: true,
          6.1: { 
            id: 6.1,
            name: "Swiss Ball Hamstring Curl",
            primaryMuscleGroups: ['Hamstrings'],
            secondaryMuscleGroups: [''],
            equipmentRequired: ['swiss ball'],
            equipmentOptions: [''],
            reps: 17,
            sets: 3,
            infoUrl: "https://youtu.be/NwE9ppTTlXo?t=3",
            asset: require("../assets/gifs/SwissBallHamstringCurl.gif"),
            available: true,
            alternate: false,
            // switchSides: true,
            // switchAfter: 30,
            variations: {
              available: true,
            },
          6.2: { 
            id: 6.2,
            name: "Single-leg Swiss Ball Hamstring Curl",
            primaryMuscleGroups: ['Hamstrings'],
            secondaryMuscleGroups: [''],
            equipmentRequired: ['swiss ball'],
            equipmentOptions: [''],
            reps: 17,
            sets: 3,
            infoUrl: "",
            asset: require("../assets/gifs/SingleLegSwissBallHamstringCurl.gif"),
            available: true,
            alternate: false,
            // switchSides: true,
            // switchAfter: 30,
            variations: {
              available: false,
            }
          },
        }
      },
    7: { 
      id: 7,
      name: "Calf Raises",
      primaryMuscleGroups: ["Calfs"],
      secondaryMuscleGroups: [''],
      equipmentRequired: ['step'],
      equipmentOptions: [''],
      reps: 17,
      sets: 3,
      infoUrl: "",
      asset: require("../assets/gifs/CalfRaises.gif"),
      available: true,
      alternate: false,
      // switchSides: true,
      // switchAfter: 30,
      variations: {
        available: false,
      }
    },
    8: { 
      id: 8,
      name: "Glute Bridge",
      primaryMuscleGroups: ['Glutes'],
      secondaryMuscleGroups: [''],
      equipmentRequired: [''],
      equipmentOptions: [''],
      reps: 17,
      sets: 3,
      infoUrl: "",
      asset: require("../assets/gifs/GluteBridge.gif"),
      available: true,
      alternate: false,
      // switchSides: true,
      // switchAfter: 30,
      variations: {
        available: true,
        13.1: {
          id: 13.1,
          name: "Glute Bridge March",
          primaryMuscleGroups: [],
          secondaryMuscleGroups: [''],
          equipmentRequired: [''],
          equipmentOptions: [''],
          reps: 17,
          sets: 3,
          infoUrl: "",
          asset: require("../assets/gifs/GluteBridgeMarch.gif"),
          available: true,
          alternate: false,
          // switchSides: true,
          // switchAfter: 30,
          variations: {
            available: false,
          }
        },
        8.2: {
          id: 13.2,
          name: "Glute Bridge - Single Leg",
          primaryMuscleGroups: [],
          secondaryMuscleGroups: [''],
          equipmentRequired: [''],
          equipmentOptions: [''],
          reps: 17,
          sets: 3,
          infoUrl: "",
          asset: require("../assets/gifs/GluteBridgeSingleLeg.gif"),
          available: true,
          alternate: false,
          // switchSides: true,
          // switchAfter: 30,
          variations: {
            available: false,
          }
        },
      },
    },
    9: { 
      id: 9,
      name: "Romanian Dumbbell lift",
      primaryMuscleGroups: ['glutes', 'hamstrings', 'lower back'],
      secondaryMuscleGroups: ['upperback','inner thys', 'forearms'],
      equipmentRequired: ['dumbells'],
      equipmentOptions: [''],
      reps: 17,
      sets: 10,
      infoUrl: "",
      asset: require("../assets/gifs/RomanianDumbbellLift.gif"),
      available: true,
      alternate: false,
      // switchSides: true,
      // switchAfter: 30,
      variations: {
        available: false,
      }
    },
      // 15: {
        // id: 15,
        // name: "NO MORE EXERCISES",
        // primaryMuscleGroups: [],
        // secondaryMuscleGroups: [''],
        // weight: 25,
        // reps: 13,
        // sets: 3,
        // infoUrl: "",
        // asset: require("../assets/msc/HappyDance.gif"),
        // available: true,
        // alternate: false,
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
        id: 1,
        name: "Sit-Ups",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Situp.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      2: { 
        id: 2,
        name: "Crunches",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 53,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Crunch.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      3: {
        id: 3,
        name: "Leg Lifts",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        reps: 53,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/LegLift.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      4: {
        id: 4,
        name: "Plank",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/Plank.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      5: {
        id: 5,
        name: "Bicycles",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/BicycleCrunch.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      6: {
        id: 6,
        name: "Bear Crawl",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/BearCrawl.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      7: {
        id: 7,
        name: "Mountain Climbers",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/MountainClimber.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      },
      8: {
        id: 8,
        name: "Leg Circles",
        primaryMuscleGroups: [],
        secondaryMuscleGroups: [''],
        equipmentRequired: [''],
        equipmentOptions: [''],
        incrumentLbs: null,
        reps: 1,
        sets: 3,
        infoUrl: "",
        asset: require("../assets/gifs/LegCircle.gif"),
        available: true,
        alternate: false,
        variations: {
          available: false,
        }
      }
      // 9: {
      //   id: 9,
      //   name: "NO MORE EXERCISES",
      //   primaryMuscleGroups: [],
      //   secondaryMuscleGroups: [''],
      //   reps: 0,
      //   sets: 0,
      //   infoUrl: "",
      //   asset: require("../assets/msc/HappyDance.gif"),
      //   available: true,
      //   alternate: false,
      //   // switchSides: true,
      //   // switchAfter: 30,
      // },
    }
  },
  favoriteExercises: {
    exercises: {},
    
  },
};

export default workout;
