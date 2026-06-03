import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export default function LoginButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#7A4EF7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});