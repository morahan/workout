import React, { useState } from "react";
import {View, Text, Button, Modal, TouchableOpacity } from 'react-native'
import styles from '../styles/styles.js';

// let modalVisibility = true;

function ExModal(){
    const [modalVisibility, setModalVisibility] = useState(false);
    // render(){
        return (
          <View style={{ flex: 1, marginTop: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 48, alignContent: "center" }}>
              This is regular text
            </Text>
            <Button
              title="Turn On Modal"
              onPress={() => setModalVisibility(true)}
            />
            <Modal
              transpartent={false}
              visibility={modalVisibility}
              style={{ alignSelf: "center" }}
            >
              <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                <View
                  style={{
                    backgroundColor: "#ffffff",
                    margin: 50,
                    padding: 25,
                    borderRadius: 37,
                    flex: 1,
                  }}
                >
                  {/* <TouchableOpacity onPress={() => {modalVisibility = false;}}>
                                <Text style={styles.HeaderText2}>this is inside the modal</Text>
                            </TouchableOpacity>   */}
                  {/* ==== Using Hooks ===  */}
                  <TouchableOpacity onPress={() => setModalVisibility(false)}>
                    <Text style={styles.HeaderText2}>
                      this is inside the modal
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        );
    // }
}


export default ExModal;