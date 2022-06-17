import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import isEqual from 'lodash.isequal';

import RadioButton from './RadioButton';
import { RadioButtonProps, RadioGroupProps } from './types';

export default function RadioGroup({ containerStyle, layout = 'column', onPress, radioButtons }: RadioGroupProps) {

  const [radioButtonsLocal, setRadioButtonsLocal] = useState<RadioButtonProps[]>(radioButtons);

  if(!isEqual(radioButtons, radioButtonsLocal)) {
    setRadioButtonsLocal(radioButtons);
  }

  function handlePress(id: string) {
    for (const button of radioButtonsLocal) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setRadioButtonsLocal([...radioButtonsLocal]);
    if (onPress) {
      onPress(radioButtonsLocal);
    }
  }

  return (
    <View style={[styles.container, { flexDirection: layout }, containerStyle]}>
      {radioButtonsLocal.map((button) => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={(id: string) => {
            handlePress(id);
            if (button.onPress && typeof button.onPress === 'function') {
              button.onPress(id);
            }
          }}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});
