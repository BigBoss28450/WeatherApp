import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  headerButton: {
    // flex: 1,
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HeaderButton({ onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.headerButton}>
        <MaterialCommunityIcons name={icon} size={25} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

HeaderButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string.isRequired,
};

HeaderButton.defaultProps = {
  onPress: () => {},
};
