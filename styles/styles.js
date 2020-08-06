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
  
  ContainerSafeView: {
    margin: 30,
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
  
  Gif: {
    color: 'blue',
    height: "35%",
    width: "35%",
  },

  // Modal: {
  //   backgroundColor: 'green',
  //   height: "35%",
  //   width: "35%",
  // },

  // ModalWrapper: {
  //   backgroundColor: 'green',
  //   height: "100%",
  //   width: "100%",
  //   elevation: 1,
  // },

  // HeaderText: {
  //   color: "#000",
  //   fontSize: 47,
  //   textAlign: 'center',
  //   paddingTop: "5%",
  //   borderBottomColor: 'black',
  // },
  ModalHeadingArea: {
    backgroundColor: "whitesmoke",
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
    elevation: 2,
  },

  ModalHeaddingText: {
    // backgroundColor: 'white',
    textAlign: "center",
    fontSize: 23,
    elevation: 2,
  },

  // ModalBackdrop: {
  //   backgroundColor: 'grey',
  //   height: "150%",
  //   width: "100%",
  //   // alignSelf: "center",
  //   alignItems: "center",
  //   zIndex: 100,
  //   elevation: 2,
  // },

  ModalBox: {
    backgroundColor: 'white',
    margin: "25%",
    height: "75%",
    width: "75%",
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 17,
    // overflow: "auto",
    // overflowY: "auto",
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
  
  Welcome: {
    color: "#ffff",
    fontSize: 23,
    paddingTop: "2%",
    // paddingBottom: "5%",
    alignSelf: "center",
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

  BtnCloseModal: {
    // width: "75%",
    // height: "50%",
    // margin: "0%",
    paddingLeft: "10%",
    paddingRight: "10%",
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

  Icon: {
    height: 23,
    width: 23,
    // alignItems: "space-between",
    alignSelf: "center"
    // top: '5%',
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
    paddingBottom: "20%",
    borderRadius: 17,
    justifyContent: 'space-between',
    alignItems: 'center',
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