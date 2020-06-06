// Link to article: https://medium.com/fantageek/how-to-make-tag-selection-view-in-react-native-b6f8b0adc891
//  Link to potential different appraoch article: https://medium.com/fantageek/how-to-make-tag-selection-view-in-react-native-b6f8b0adc891

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Styles from '../../styles/styles.js';
import BackgroundButton from './BackgroundButton.js';
import addOrRemove from './addOrRemove.js';

export default class TagsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.selected
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.makeButtons()}
            </View>
        )
    }

    onPress = (tag) => {
        let selected
        if (this.props.isExclusive) {
            selected = [tag]
        } else {
            selected = addOrRemove(this.state.selected, tag)
        }
        this.setState({
            selected
        })
    }

    makeButtons() {
        return this.props.all.map((tag, i) => {
            const on = this.state.selected.includes(tag)
            const backgroundColor = on ? "#44ace8" : "lightgreen"
            const textColor = on ? "white" : "black"
            const borderColor = on ? "blue" : "grey"
            // const backgroundColor = on ? R.colors.on.backgroundColor : R.colors.off.backgroundColor
            // const textColor = on ? R.colors.on.text : R.colors.off.text
            // const borderColor = on ? R.colors.on.border : R.colors.off.border
            return (
                <>
                    <BackgroundButton
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        borderColor={borderColor}
                        onPress={() => {
                            this.onPress(tag)
                        }}
                        key={i}
                        showImage={on}
                        title={tag} 
                    />
                </>
            )
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20
    }
})