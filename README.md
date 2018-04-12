# React Native Radio Buttons Group

Simple and Best. An easy to use radio buttons for react native apps.

![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/react-native-radio-buttons-group.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-radio-buttons-group/)

## Getting Started

###### Just a sneak peek (lots more can be done)

![DEMO](./docs/images/react-native-radio-buttons-group.gif)

### Installation

```
npm i react-native-radio-buttons-group --save
```

### Usage

###### App.js
```
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends Component {
    state = {
        data: [
            {
                label: 'Default value is same as label',
            },
            {
                label: 'Value is different',
                value: "I'm not same as label",
            },
            {
                label: 'Color',
                color: 'green',
            },
            {
                disabled: true,
                label: 'Disabled',
            },
            {
                label: 'Size',
                size: 32,
            },
        ],
    };

    // update state
    onPress = data => this.setState({ data });

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={styles.container}>
                <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
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
    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },
});
```

### Props
Key | Type | Default | Value
--- | --- | --- | --- 
color | String | #444 | all css color formats
disabled | Boolean | false | true / false
label | String | You forgot to give label | any string
layout | String | column | row / column
selected | Boolean | false | true / false
size | Number | 24 | positive numbers
value | String | value assigned to label | any string

###### Horizontal (side by side)
```
<RadioGroup 
    radioButtons={this.state.data} 
    onPress={this.onPress} 
    flexDirection='row'
/>
```

## Contributing

Contribution always motivates. 

Incase of suggestions, Google my name "Thakur Ballary" and reach me on any social platforms.

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [MIT License](https://github.com/ThakurBallary/react-native-radio-buttons-group/blob/master/LICENSE)
