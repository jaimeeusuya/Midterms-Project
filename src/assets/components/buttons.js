// buttons.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Primary Button
export const PrimaryButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.primary, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Secondary Button
export const SecondaryButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.secondary, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Outline Button
export const OutlineButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.outline, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, styles.outlineText]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Disabled Button
export const DisabledButton = ({ title }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.disabled]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 5,
    width: 200,
    marginTop: 20,
  },
  primary: {
    backgroundColor: '#114EA2',
  },
  secondary: {
    backgroundColor: '#6C757D',
  },
  outline: {
    borderColor: '#007BFF',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: '#D3D3D3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineText: {
    color: '#007BFF',
  },
});

export default {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  DisabledButton,
};