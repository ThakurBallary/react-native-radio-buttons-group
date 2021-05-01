import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { RadioButton, RadioButtonProps, RadioGroupProps } from './index';

export default function RadioGroup({ layout = 'column', onPress, radioButtons }: RadioGroupProps) {

  const [radioButtonsArray, setRadioButtonsArray] = useState<RadioButtonProps[]>(radioButtons);

  function areRadioButtonsEqual(a: RadioButtonProps, b: RadioButtonProps): boolean {
    return a.color === b.color && a.containerStyle === b.containerStyle && a.disabled === b.disabled && a.id === b.id &&
        a.label === b.label && a.labelStyle === b.labelStyle && a.layout === b.layout && a.selected === b.selected &&
        a.size === b.size && a.value === b.value;
  }

  function areRadioButtonArraysEqual(a: RadioButtonProps[], b: RadioButtonProps[]): boolean {
    if (a.length !== b.length) return false;
    else {
      for (let i = 0; i < a.length; i++) {
        if (!areRadioButtonsEqual(a[i], b[i])) return false;
      }

      return true;
    }
  }

  useEffect(()=>{
    if (!areRadioButtonArraysEqual(radioButtons, radioButtonsArray)) {
      setRadioButtonsArray(radioButtons);
    }
  },[radioButtons, radioButtonsArray])

  function handlePress(id: string) {
    for (const button of radioButtonsArray) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
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
