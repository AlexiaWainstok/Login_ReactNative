import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('../assets/coca-cola.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 220,
    height: 120,
    marginTop: 80,
  },
});