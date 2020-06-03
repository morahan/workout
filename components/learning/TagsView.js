//  Link to article: https://medium.com/fantageek/how-to-make-tag-selection-view-in-react-native-b6f8b0adc891

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import R from 'res/R';
import BackgroundButton from 'library/components/BackgroundButton';
import addOrRemove from 'library/utils/addOrRemove';

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
            const backgroundColor = on ? R.colors.on.backgroundColor : R.colors.off.backgroundColor
            const textColor = on ? R.colors.on.text : R.colors.off.text
            const borderColor = on ? R.colors.on.border : R.colors.off.border
            return (
                <BackgroundButton
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    borderColor={borderColor}
                    onPress={() => {
                        this.onPress(tag)
                    }}
                    key={i}
                    showImage={on}
                    title={tag} />
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