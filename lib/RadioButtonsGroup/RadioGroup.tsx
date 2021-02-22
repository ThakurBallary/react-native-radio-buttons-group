import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { RadioButtonProps, RadioGroupProps } from './types';
import RadioButton from './RadioButton';

export default function RadioGroup({ layout = 'column', onPress, radioButtons }: RadioGroupProps) {

  const [radioButtonsArray, setRadioButtonsArray] = useState<RadioButtonProps[]>(radioButtons);

  function handlePress(id: string) {
    const prevSelected = radioButtonsArray.find(e => e.selected);
    if (prevSelected) {
      prevSelected.selected = false;
    }
    const curSelected = radioButtonsArray.find(e => e.id === id);
    if (curSelected) {
      curSelected.selected = true;
    }
    setRadioButtonsArray([...radioButtonsArray]);
    if (onPress) {
      onPress(radioButtonsArray);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: layout }}>
        {radioButtonsArray.map((button) => (
          <RadioButton
            {...button}
            key={button.id}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});