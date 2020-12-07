import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../config/colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalLayer: { flex: 1, maxHeight: 800, backgroundColor: colors.black },
});

export default function ModalContainer({ children }) {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalLayer}>{children}</View>
    </View>
  );
}

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
