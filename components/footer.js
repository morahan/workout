import React, { useState } from 'react';
import { Text, View, Linking } from 'react-native';
import styles from '../styles/styles.js';

function Footer() {

    return (
        <View style={styles.Screen}>
            <TouchableOpacity onPress={() => Linking.openURL('https;//freiolabs.com')}>
                <Text style={styles.foot}>
                    © Freio Labs, All Rights Reserved
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;
