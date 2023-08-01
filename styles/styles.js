import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#44ace8',
    padding: "3%",
    justifyContent: 'space-around',
    height: "100%",
  },
  
  // ContainerSafeView: {
    // margin: 30,
  // },

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

  FitImage: {
    width: 350,
    height: 350,
  },

  Gif: {
    // maxWidth: "45%",
    // justifyContent: 'center'
    // maxHeight: "25%"
    alignSelf: "center",
    resizeMode: "contain",

  
  },

  ModalBackdrop: {
    backgroundColor: '#000000aa',
    height: "100%",
  },

  ModalHeadingArea: {
    backgroundColor: "whitesmoke",
    width: "100%",
    margin: "3%",
    padding: "5%",

    // paddingBottom: "5%",
    // paddingLeft: "5%",
    // paddingRight: "5%",
    // justifyContent: "space-between",
    borderRadius: 17,
    // height: "25%",
    // width: "100%",
  },

  ModalSubHeaddingText: {
    // backgroundColor: 'white',
    // marginTop: "10%",
    textAlign: "center",
    fontSize: 17,
    // elevation: 2,
  },

  ModalHeaddingText: {
    // backgroundColor: 'white',
    textAlign: "center",
    fontSize: 25,
  },

  ModalBox: {
    backgroundColor: 'white',
    marginTop: "10vh",
    marginBottom: "10vh",
    // height: "75%",
    width: "100vw",
    elevation: 5,
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 17,
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
    paddingBottom: "5vh"
  },

  Logo: {
    height: "15vh", 
    width: "15vw", 
    alignSelf: "center", 
    paddingTop: "5vh",
  },
  
  LogIn: {
    // margin: "5%",
    display: "flex",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 17,
    height: '25vh',
    width: "50vw",
  },
  
  Welcome: {
    color: "#ffff",
    fontSize: 23,
    paddingTop: "2vh",
    // paddingBottom: "5%",
    alignSelf: "center",
  },

  Box: {
    display: "flex",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: "space-between",
    borderRadius: 17,
    width: "80vw",
    padding: "5vh",
    boxShadow: '0px 5px 30px 1px #000000',
    // borderWidth: 2,
    // borderColor: 'rgba(0,0,0,0.2)',
    
  },

  EBox: {
    width: "100%",
    // backgroundColor: "lightgrey",
    justifyContent: "space-between",
    borderRadius: 17,
    alignItems: 'center',
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 17,
  },

  BtnCloseModal: {
    paddingLeft: "10%",
    paddingRight: "10%",
    marginBottom: "5%",
    backgroundColor: "black",
    borderRadius: 17,
  },

  BtnBtm: {
    width: "75%",
    marginBottom: 37,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 17,
    // position: 'absolute',
    // bottom: -10,
    justifyContent: 'flex-end',
  },

  TagsView: {
    width: "95%",
    height: "35%",
    marginBottom: 37,
    // alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 17,
  },

  BtnStop: {
    width: "100vh",
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

  Icon: {
    height: 13,
    width: 13,
    alignSelf: "center",
    padding: "1vh",
    margin: "3vh",
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
    paddingTop: "5vh",
    paddingBottom: "5vh",

  },

  HeaderText: {
    color: "#000",
    fontSize: 47,
    textAlign: 'center',
    paddingTop: "7vh",
    // marginTop: "15vr",
    borderBottomColor: 'black',
  },

  HeaderText2: {
    color: "#000",
    fontSize: 37,
    textAlign: 'center',
    // marginTop: "-5vh",
    paddingTop: "3vh",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: "5vh",
  },

  Text2: {
    color: "#000",
    fontSize: 31,
    textAlign: 'center',
    paddingBottom: '3vh'
  },
  
  Text3: {
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    paddingBottom: '3vh'
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

  TagUnselected: {
    backgroundColor: "blue",
    
  },

  TagSelected: {
    backgroundColor: "green",

  },
  
  Spacer15: {
    marginTop: "15%"
  },

  Spacer10: {
    marginTop: "10%",
  },

  Spacer5: {
    marginTop: "5%"
  }, 

  Spacer3: {
    marginTop: "3%"
  }, 

  SpaceBtw: {
    justifyContent: "space-between",
    // alignItems: "space-between",
  }, 

  Center: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // alignSelf: "center",
    // textAlign: "center",
    // justifyContent: "center",

  }, 


});

export default styles;