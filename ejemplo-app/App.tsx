import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
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
