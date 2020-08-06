import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

const TestModal = () => {
    return(
        <View style={styles.ModalWrapper}> 
            <View style={styles.ModalBackdrop}>
                <Text>BackDrop Text</Text>
            </View>
            <View style={styles.ModalBox}>
                <Text>This text is inside of Modal Box</Text>
            </View>
        </View>
    )
};

export default TestModal;