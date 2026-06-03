import React from 'react';
import { Image, StyleSheet } from 'react-native';

import cocaCola from '../../assets/coca-cola.png';

export default function Logo() {
  return (
    <Image
      source={cocaCola}
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