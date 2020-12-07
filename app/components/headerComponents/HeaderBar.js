import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  headerBar: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 60,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default function HeaderBar({ children }) {
  return <View style={styles.headerBar}>{children}</View>;
}

HeaderBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
