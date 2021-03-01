import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { RadioButton, RadioButtonProps, RadioGroupProps } from './index';

export default function RadioGroup({ layout = 'column', onPress, radioButtons }: RadioGroupProps) {

  const [radioButtonsArray, setRadioButtonsArray] = useState<RadioButtonProps[]>(radioButtons);

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
