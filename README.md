# react-native-radio-buttons-group
Simple and Best. An easy to use radio buttons for react native apps.

================================
REACT NATIVE RADIO BUTTONS GROUP 
================================

========================
TODO
------------------------
animation

========================
Default
------------------------
{
  color: '#444',
  disabled: false,
  label: 'You forgot to give label', // unique and not null
  layout: 'row',
  selected: false,
  size: 24,
  value: <label> // value is assigned to label
}

========================
Props
------------------------
color
disabled
label
layout
selected
size
value

========================
Validation
------------------------
Problem: "label" should be unique
Solution: alert function

Problem: "selected: true" for more than one button
Solution: set "selected: false" for all other buttons 
