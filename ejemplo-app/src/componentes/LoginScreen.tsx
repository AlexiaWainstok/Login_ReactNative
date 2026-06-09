import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import Header from '../componentes/Header';
import CustomInput from './CustomInput';
import LoginButton from '../componentes/LoginButton';
import Logo from '../componentes/Logo';

//[IA: ChatGpt, Le pregunté a ChatGPT cómo manejar los datos que escribe el usuario y
//  me explicó el uso de useState para guardar el usuario, la contraseña y el mensaje que se muestra en pantalla.]
export default function LoginScreen() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  
  const USER_HARDCODED = 'angie';
  const PASSWORD_HARDCODED = 't3qu3r3m0s';
  

  //[IA: ChatGpt, me ayudó a entender cómo comparar los datos ingresados por el usuario con los 
  // valores hardcodeados y mostrar distintos mensajes según el resultado.]
  const validateLogin = () => {
    if (
      user === USER_HARDCODED &&
      password === PASSWORD_HARDCODED
    ) {
      setMessage('Login exitoso');
    } else {
      setMessage(
        'Usuario o contraseña incorrectos, vuelva a intentar'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.formContainer}>
        <Logo />
        <CustomInput
          placeholder="Usuario"
          value={user}
          onChangeText={setUser}
        />

        <CustomInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <LoginButton
          title="INGRESAR"
          onPress={validateLogin}
        />

        <Text style={styles.link}>
          ¿Olvidaste la clave?
        </Text>

        <Text style={styles.link}>
          Crear Cuenta
        </Text>

        {message !== '' && (
          <Text
            style={[
              styles.message,
              message === 'Login exitoso'
                ? styles.success
                : styles.error,
            ]}
          >
            {message}
          </Text>
        )}

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },

  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  link: {
    marginTop: 12,
    fontSize: 14,
  },

  message: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  success: {
    color: 'green',
  },

  error: {
    color: 'red',
  },
});