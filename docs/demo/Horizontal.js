import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class Horizontal extends Component {
    state = {
        data: [
            {
                label: 'Value is different',
                value: "I'm not same as label",
            },
            {
                label: 'Color',
                color: 'green',
            },
        ],
        data2: [
            {
                label: 'layout: column',
                layout: 'column',
            }
        ]
    };

    // update state
    onPress = data => this.setState({ data });

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton
            ? selectedButton.value
            : this.state.data[0].label;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18, marginBottom: 50 }}>
                    Value = {selectedButton}
                </Text>
                <RadioGroup
                    radioButtons={this.state.data}
                    onPress={this.onPress}
                    flexDirection="row"
                />
                <View style={{ marginTop: 80, padding: 20, backgroundColor: '#eee' }}>
                    <RadioGroup
                        radioButtons={this.state.data2}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
