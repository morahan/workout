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
  cta2: {
    color: "#ffff",
    fontSize: 31,
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

  Box: {
    margin: "5%",
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: "23%",
    borderRadius: 17,
    height: '50%',
    width: "175%",
  },

  BtnBox: {
    backgroundColor: 'whitesmoke',
    borderRadius: 17,
    height: '15%',
    width: "75%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "5%",
  },

  Btn: {
   justifyContent: "center",
   padding: "10%",
   borderRadius: 17,
  },

  BtnHz: {
   flexDirection: "row",
   justifyContent: "space-between",
   margin: "5%",
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
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  HeaderText: {
    color: "#000",
    fontSize: 23,
    textAlign: 'center',
    paddingTop: "5%",
    paddingBottom: "3%",
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  Text2: {
    color: "#000",
    fontSize: 17,
    textAlign: 'center',
  },

  EBox: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingTop: "10%",
  },

  WText2: {
    color: "#fff",
    fontSize: 17,
    textAlign: 'center',
  },

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