import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#44ace8',
    // padding: "3%",
    justifyContent: 'space-around',
    height: "100%",
  },

  TopLogoAndHeading: {
    justifyContent: "center",
    marginBottom: '-15%',
  },
  
  WorkoutScreen: {
    display: "flex",
    backgroundColor: '#44ace8',
    alignItems: 'center',
    height: "100%",
    width: "100%",
    // paddingBottom: "5%",
    // marginBottom:"5%",
    justifyContent: 'space-between',
    borderRadius: 37,
  },
  
  Head: {
    justifyContent: 'space-between',
    color: "#ffff",
    fontSize: 31,
    // paddingBottom: "3",
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
    // margin: "2%",
  },

  foot: {
    color: "#fff",
    paddingBottom: "5%"
  },

  Logo: {
    height: "15%", 
    width: "15%", 
    alignSelf: "center", 
    paddingTop: "5%",
  },

  Welcome: {
    color: "#ffff",
    fontSize: 23,
    paddingTop: "2%",
    // paddingBottom: "5%",
    alignSelf: "center",
  },

  LogIn: {
    // margin: "5%",
    display: "flex",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 17,
    height: '25%',
    width: "50%",
  },

  Box: {
    display: "flex",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: "space-around",
    borderRadius: 17,
    height: '35%',
    width: "75%",
    paddingBottom: "2%",
    paddingTop: "2%",
  },

  BtnBox: {
    backgroundColor: 'whitesmoke',
    borderRadius: 17,
    height: '15%',
    width: "75%",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingBottom: "5%",
    // paddingTop: "5%",
    marginBottom: "3%"
  },

  BtnBoxLG: {
    display: "flex",
    // alignContent: "space-between",
    // justifyContent: "space-around",
    backgroundColor: 'whitesmoke',
    borderRadius: 17,
    height: '25%',
    width: "50%",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingBottom: "5%",
    // paddingTop: "5%",
    marginBottom: "3%"
  },

  Btn: {
    width: "75%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 17,
  },

  BtnStop: {
    width: "100%",
    // height: "25%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "black",
    borderRadius: 17,
  },

  BtnStart: {
    width: "100%",
    // height: "50%",
    // alignItems: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "black",
    borderRadius: 17,
  },

  BtnSM: {
   justifyContent: "center",
   width: "17%",
   height: "5%",
   textAlign: "center",
   backgroundColor: "black",
   borderRadius: 7,
  },

  BtnHz: {
   flexDirection: "row",
   justifyContent: "space-around",
   padding: "3%",
   paddingRight: "3%",
   paddingLeft: "3%",
   borderRadius: 17,
  },

  Text: {
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  WText: {
    color: "white",
    fontSize: 23,
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  WText2: {
    color: "white",
    fontSize: 17,
    textAlign: 'center',
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  HeaderText: {
    color: "#000",
    fontSize: 47,
    textAlign: 'center',
    paddingTop: "5%",
    borderBottomColor: 'black',
  },

  HeaderText2: {
    color: "#000",
    fontSize: 37,
    textAlign: 'center',
    marginTop: "-5%",
    // paddingBottom: "2%",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  Text2: {
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    paddingBottom: '4%'
  },

  EBox: {
    display: "flex",
    width: "100%",
    height: "45%",
    // marginTop: "5%",
    // marginBottom: "-15%",
    // justifyContent: "space-around",
    // backgroundColor: "lightgrey",
    borderRadius: 17,
  },

  WText2: {
    color: "#fff",
    fontSize: 17,
    textAlign: 'center',
  },

  Input: {
    alignItems: 'center',
    width: "80%",
    height: "15%",
    fontSize: 23,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
  },

  Input2: {
    width: "75%",
    height: "25%",
    textAlign: "center",
    fontSize: 17,
    borderRadius: 17,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: "-5%"
  },
});

export default styles;