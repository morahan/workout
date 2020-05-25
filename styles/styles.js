import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#44ace8',
    padding: "3vh",
    justifyContent: 'space-around',
    height: "100vh",
  },

  TopLogoAndHeading: {
    justifyContent: "center",
    marginBottom: '-15vh',
  },
  
  WorkoutScreen: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    height: "50vh",
    width: "75vw",
    paddingBottom: "5vh",
    // marginBottom:"5vh",
    // justifyContent: 'space-between',
    borderRadius: "37px"
  },
  
  Head: {
    justifyContent: 'space-between',
    color: "#ffff",
    fontSize: 31,
    paddingBottom: "3vh",
  },
  
  cta: {
    color: "#ffff",
    fontSize: 37,
    justifyContent: 'space-between'
  },

  cta2: {
    color: "#ffff",
    fontSize: 31,
    justifyContent: 'space-between',
    textAlign: "center",
    margin: "2vh",
  },

  foot: {
    color: "#fff",
    paddingBottom: "5vh"
  },

  Logo: {
    height: 117, width: 117, alignSelf: "center", paddingTop: 100
  },

  Welcome: {
    color: "#ffff",
    fontSize: 23,
    paddingTop: "2vh",
    // paddingBottom: "5vh",
    alignSelf: "center",

  },

  LogIn: {
    margin: "5%",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 17,
    height: '25vh',
    width: "55vw",
  },

  Box: {
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    borderRadius: "17px",
    // padding: "2vh",
    margin: "3vh",
    height: '25vh',
    width: "50vw",
  },

  BtnBox: {
    backgroundColor: 'whitesmoke',
    borderRadius: 17,
    height: '15%',
    width: "75%",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    paddingBottom: "5vh",
    // paddingTop: "5vh",
    marginBottom: "3vh"
  },

  BtnBoxLG: {
    display: "flex",
    // alignContent: "space-between",
    // justifyContent: "space-around",
    backgroundColor: 'whitesmoke',
    borderRadius: 17,
    height: '25vh',
    width: "50vw",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    paddingBottom: "5vh",
    // paddingTop: "5vh",
    marginBottom: "3vh"
  },

  Btn: {
   justifyContent: "center",
   width: "35vw",
   height: "7vh",
  //  padding: "1vh",
  //  margin: "5vh",
  //  padding: "15%",
  //  margin: "10%",
   alignSelf: "center",
   backgroundColor: "black",
   borderRadius: 17,
  },

  BtnSM: {
   justifyContent: "center",
   width: "17vw",
   height: "5vh",
  //  padding: "1vh",
  //  margin: "5vh",
  //  padding: "15%",
  //  margin: "10%",
  //  alignSelf: "center",
   textAlign: "center",
   backgroundColor: "black",
   borderRadius: 7,
  },

  BtnHz: {
   flexDirection: "row",
   justifyContent: "space-around",
   padding: "3vh",
   paddingRight: "3vw",
   paddingLeft: "3vw",
  //  margin: "0",
   borderRadius: 17,
  },

  Text: {
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },

  WText: {
    color: "white",
    fontSize: 23,
    textAlign: 'center',
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },
  WText2: {
    color: "white",
    fontSize: 17,
    textAlign: 'center',
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },

  HeaderText: {
    color: "#000",
    fontSize: 47,
    textAlign: 'center',
    paddingTop: "2vh",
    paddingBottom: "2vh",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  HeaderText2: {
    color: "#000",
    fontSize: 37,
    textAlign: 'center',
    paddingTop: "2vh",
    paddingBottom: "2vh",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  Text2: {
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    // alignItems: "space-between",
    justifyContent: "spaceBetween",
    margin: '1vh'
  },

  EBox: {
    width: "100%",
    padding: "1vh",
    margin: "1vh",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightgrey",
    borderRadius: "17px",
  },

  WText2: {
    color: "#fff",
    fontSize: 17,
    textAlign: 'center',
  },

  Input: {
    alignItems: 'center',
    width: "80vw",
    fontSize: 23,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    height: "15vh",
    alignSelf: 'center',
  },

  Input2: {
    width: "35vw",
    textAlign: "center",
    fontSize: 17,
    borderRadius: 13,
    borderColor: 'black',
    borderWidth: 2,
    height: "5vh",
    marginBottom: "-5vh"
  },
});

export default styles;