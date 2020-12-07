import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default function TextButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={{ color: colors.white }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

TextButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
};

TextButton.defaultProps = {
  onPress: () => {},
};
