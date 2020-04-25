import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#44ace8',
    alignItems: 'center',
    paddingTop: "10%",
    justifyContent: 'space-between'
  },
  
  Head: {
    justifyContent: 'space-between'
    // flex: 5,
    // justifyContent: 'space-between',
  },
  
  cta: {
    color: "#ffff",
    fontSize: 37,
    justifyContent: 'space-between'
  },

  foot: {
    // flex: 3,
    color: "#fff",
    paddingBottom: "5%"
    // justifyContent: 'space-between',
  },

  // Logo: {
  //   height: 117, width: 117, alignSelf: "center", paddingTop: 100
  // },

  Welcome: {
    color: "#ffff",
    fontSize: 23,
    paddingTop: "5%",
    alignSelf: "center",
  },

  LogIn: {
    margin: "5%",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    height: '10%',
    width: "75%",
  },

  Btn: {
   justifyContent: "center",
   borderRadius: 17,
  },

  // Text: {
  //   color: "#000",
  //   fontSize: 17,
  //   textAlign: 'center',
  //   paddingTop: "15%",
  // },

  // Text2: {
  //   color: "#000",
  //   fontSize: 17,
  //   textAlign: 'center',
  // },

  Input: {
    alignItems: 'center',
    width: "80%",
    fontSize: 23,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    height: "25%",
    // padding: 10,
    // padding: '10%',
    alignSelf: 'center',
  },
});

export default styles;