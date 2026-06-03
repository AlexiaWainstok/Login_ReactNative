import React from 'react';
import {  StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/componentes/LoginScreen';


export default function App() {
 return (
   <SafeAreaView style={{ flex: 1 }}>
     <StatusBar
       backgroundColor="#6C3CF4"
       barStyle="light-content"
     />

     <LoginScreen />
   </SafeAreaView>
 );
}
