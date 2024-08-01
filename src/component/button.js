import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: '100%',
    borderRadius: 15,
    marginTop: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '800',
    margin: 10,
    color: '#09090A',
    backgroundColor: 'transparent',
  },
  button1: {
    alignSelf: "center",
    width: '90%',
    borderRadius: 15,
    marginTop: 16,
    backgroundColor: "#C9C9C9",
    justifyContent: "center",
    alignItems: "center",
    height: 40

  },

});


export function Button({ style, textStyle, button, onPress, title, ...rest }) {
  return (

    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.button1, style]}>
      <Text style={[styles.buttonText,]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
