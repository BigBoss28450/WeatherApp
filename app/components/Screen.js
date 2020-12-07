import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';

const sunshine = require('../assets/sunshine.jpg');

export default function Screen({ children }) {
  return (
    <ImageBackground source={sunshine} style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={colors.black} barStyle="light-content" />

          {children}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
