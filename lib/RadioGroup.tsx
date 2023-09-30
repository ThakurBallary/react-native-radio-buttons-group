import React from 'react';
import { StyleSheet, View } from 'react-native';

import RadioButton from './RadioButton';
import { RadioGroupProps } from './types';

export default function RadioGroup({
  accessibilityLabel = 'radio group',
  containerStyle,
  layout = 'column',
  onPress,
  radioButtons,
  selectedId,
  testID
}: RadioGroupProps) {

  function handlePress(id: string) {
    if (id !== selectedId && onPress) {
      onPress(id);
    }
  }

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="radiogroup"
      style={[styles.container, { flexDirection: layout }, containerStyle]}
      testID={testID}
    >
      {radioButtons.map((button) => (
        <RadioButton
          {...button}
          key={button.id}
          selected={button.id === selectedId}
          onPress={() => handlePress(button.id)}
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
