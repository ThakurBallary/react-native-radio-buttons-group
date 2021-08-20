import React, {useState} from 'react';
import {PixelRatio, Pressable, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { RadioButtonProps } from './types';

export default function RadioButton({
  borderColor,
  color = '#444',
  focusColor,
  containerStyle,
  disabled = false,
  id,
  label,
  labelStyle,
  layout = 'row',
  onPress,
  onFocus,
  onBlur,
  selected = false,
  size = 24 }: RadioButtonProps) {

  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: any = { flexDirection: 'row' }
  let margin: any = { marginLeft: 10 };

  const [displayColor, setDisplayColor] = useState(color);

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  function handleFocus() {
    if (disabled) {
      return null;
    }
    if (onFocus) {
      onFocus(id);
    }
    if(focusColor) {
      setDisplayColor(focusColor);
    }
  }

  function handleBlur() {
    if (disabled) {
      return null;
    }
    if (onBlur) {
      onBlur(id);
    }

    setDisplayColor(color);
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[styles.container, orientation, { opacity: disabled ? 0.2 : 1 }, containerStyle]}
    >
      <View
        style={[
          styles.border,
          {
            borderColor: borderColor || displayColor,
            borderWidth,
            width: sizeFull,
            height: sizeFull,
            borderRadius: sizeHalf
          }
        ]}>
        {selected && (
          <View
            style={{
              backgroundColor: displayColor,
              width: sizeHalf,
              height: sizeHalf,
              borderRadius: sizeHalf
            }}
          />
        )}
      </View>
      {
        Boolean(label) && <Text style={[margin, labelStyle]}>{label}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
