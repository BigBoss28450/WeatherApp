import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: { flex: 1, paddingLeft: 20, paddingVertical: 10 },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default function CustomTextInput({ placeholder, onSubmitEditing }) {
  const [string, setString] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          style={{ flex: 1 }}
          placeholder={placeholder}
          returnKeyType="search"
          returnKeyLabel="Buscar"
          onChangeText={setString}
          onSubmitEditing={() => onSubmitEditing(string)}
        />
      </View>
    </View>
  );
}

CustomTextInput.propTypes = {
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
};

CustomTextInput.defaultProps = {
  onSubmitEditing: () => {},
  placeholder: 'Aa',
};
