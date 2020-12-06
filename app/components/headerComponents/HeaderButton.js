import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  headerButton: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function HeaderButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.headerButton}>
        <MaterialCommunityIcons name="magnify" size={25} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

HeaderButton.propTypes = {
  onPress: PropTypes.func,
};

HeaderButton.defaultProps = {
  onPress: () => {},
};
