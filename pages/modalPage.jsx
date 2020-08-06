import React, { useState } from "react";
import {View, Text, Button, Modal, TouchableOpacity } from 'react-native'
import styles from '../styles/styles.js';
import { set } from "react-native-reanimated";
import TestModal from './modalTest.jsx'

// let modalVisibility = true;

function ExModal(){
    // const [modalVisibility, setModalVisibility] = useState(true);

    //  const openModal = () => {
    //     console.log("open modal", modalVisibility);
    //     setModalVisibility(true);
    //     <Modal transparent={true} visible={modalVisibility}>
    //         <View
    //             style={{
    //             backgroundColor: "#000000aa",
    //             flex: 1,
    //             borderRadius: 37,
    //             }}
    //         >
    //             <View
    //             style={{
    //                 backgroundColor: "#ffffff",
    //                 margin: 50,
    //                 padding: 25,
    //                 borderRadius: 37,
    //                 flex: 1,
    //             }}
    //             >
    //             <TouchableOpacity
    //                 onPress={() => {
    //                 setModalVisibility(false);
    //                 }}
    //             >
    //                 <Text style={styles.HeaderText2}>this is inside the modal</Text>
    //             </TouchableOpacity>
    //             </View>
    //         </View>
    //     </Modal>
    // }
    

    return (
      <View style={{ flex: 1, marginTop: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 48, alignContent: "center" }}>
          This is regular text
        </Text>
        <TestModal></TestModal>
        {/* <TouchableOpacity onPress={() => {openModal()}}> */}
          {/* <Text style={styles.HeaderText2}>Turn On Modal</Text> */}
        {/* </TouchableOpacity> */}
      </View>
    );
}


export default ExModal;