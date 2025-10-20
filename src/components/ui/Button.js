import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

/**
 * Minimal UI Button (no styling).
 * Students will style this via 'styles/styles.js'.
 */
export default function Button({ onPress, children, style, ...rest }) {
  return (
    <Pressable onPress={onPress} style={style} {...rest}>
      <Text>{children}</Text>
    </Pressable>
  );
}