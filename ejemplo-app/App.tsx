import React from 'react';
import {  StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/componentes/LoginScreen';


export default function App() {
 return (
  //[IA: ChatGpt, ChatGPT me explicó para qué servía SafeAreaView y por qué era necesario instalar la librería react-native-safe-area-context. 
  // Aprendí que se usa para evitar que el contenido quede tapado por elementos del teléfono, como la barra superior o la cámara.]
   <SafeAreaView style={{ flex: 1 }}>
     <StatusBar
       backgroundColor="#6C3CF4"
       barStyle="light-content"
     />

     <LoginScreen />
   </SafeAreaView>
 );
}
