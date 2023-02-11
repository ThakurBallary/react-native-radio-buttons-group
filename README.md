# React Native Radio Buttons Group

Simple, best and easy to use radio buttons for react native apps.

![npm](https://img.shields.io/npm/v/react-native-radio-buttons-group) ![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/react-native-radio-buttons-group.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-radio-buttons-group/)

## Getting Started

###### Just a sneak peek (lots more can be done)

![DEMO](./docs/images/react-native-radio-buttons-group.gif)

### Installation

```bash
npm i react-native-radio-buttons-group --save
```
or
```bash
yarn add react-native-radio-buttons-group
```

### Usage

##### Javascript Example

###### App.js
```jsx
import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function App() {

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

}

```

##### Typescript Example

###### App.tsx
```tsx
import React, { useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

export default function App() {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

}

```

### Props

#### RadioButton
Key | Type | Required | Default | Valid Values
--- | --- | --- | --- | --- 
borderColor | string | no | color | css color formats
borderSize | number | 2 | | positive numbers
color | string | no | #444 | css color formats
containerStyle | object | no | | react style
description | string | no |  | any string
descriptionStyle | object | no |  | react style
disabled | boolean | no | false | true / false
id | string | yes |  | unique string
label | string | no |  | any string
labelStyle | object | no |  | react style
layout | enum | no | row | row / column
onPress | function | no |  | any function 
selected | boolean | no | false | true / false
size | number | no | 24 | positive numbers
value | string | no |  | any string

#### RadioGroup
Key | Type | Required | Default | Valid Values
--- | --- | --- | --- | ---
containerStyle | object | no | | react style
layout | enum | no | column | row / column
onPress | function | no | | any function
radioButtons | array | yes | | arrary of [RadioButton](#radiobutton) objects

###### Horizontal (side by side)
```jsx
<RadioGroup 
    radioButtons={radioButtons} 
    onPress={onPressRadioButton} 
    layout='row'
/>
```

## Contributions

Fork and create a pull request

## License

[MIT License](https://github.com/ThakurBallary/react-native-radio-buttons-group/blob/master/LICENSE)


## Stargazers over time 

[![Stargazers over time](https://starchart.cc/ThakurBallary/react-native-radio-buttons-group.svg)](https://starchart.cc/ThakurBallary/react-native-radio-buttons-group)

## Sponsor
<a href="https://www.buymeacoffee.com/thakurballary" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
