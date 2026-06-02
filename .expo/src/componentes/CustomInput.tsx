import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
 placeholder: string;
 value: string;
 onChangeText: (text: string) => void;
 secureTextEntry?: boolean;
}

export default function CustomInput({
 placeholder,
 value,
 onChangeText,
 secureTextEntry = false,
}: Props) {
 return (
   <TextInput
     style={styles.input}
     placeholder={placeholder}
     value={value}
     onChangeText={onChangeText}
     secureTextEntry={secureTextEntry}
   />
 );
}

const styles = StyleSheet.create({
 input: {
   width: '90%',
   height: 50,
   borderWidth: 1,
   borderColor: '#6C3CF4',
   marginBottom: 15,
   paddingHorizontal: 10,
   backgroundColor: '#fff',
 },
});
