import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { createUser, getUsers } from '../api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SignupScreen = () => {

  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const createUserMutation = useMutation(createUser, {
    onSuccess: (data) => {
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: data });
      setSuccessMessage('User created successfully!');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 800); // Aguarda 2 segundos antes de redirecionar
    },
    onError: (error) => {
      setErrorMessage('Error creating user');
      console.error(error);
    },
  });

  const handleSignup = async () => {
    try {
      const users = await getUsers();
      const existingUser = users.find(
        (user) => user.name === username && user.email === email && user.password === password
      );
      if (existingUser) {
        // Usuário já cadastrado, redirecionar para a página inicial
        navigation.navigate('Home');
        return;
      }
      await createUserMutation.mutateAsync({ username, email, password });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Text variant="displaySmall" style={styles.title}>
        Sign Up
      </Text>
      <TextInput
        style={styles.input}
        type="flat"
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        type="flat"
        label="Username"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        type="flat"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <Button 
          mode="contained" 
          buttonColor='#385993'  // EF7377 385993
          onPress={handleSignup}
          style={styles.loginButton}
        >
          Sign Up
        </Button>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Do you have an account?</Text>
          <Button
              onPress={handleLogIn}
              textColor="#385993"
              mode="text"
            >
              LogIn
          </Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#23232e",
    padding: 16,
  },
  title: {
    marginBottom: 30,
    color: "#fff"
  },  
  input: {
    width: '100%',
    color: "#fff",
    height: 50,
    backgroundColor:"#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButton:{
    marginTop: 5,
    width: "90%",
    borderRadius: 5,
  },
  footer: {
    display: "flex",
    position:"absolute",
    bottom: 10
  },
  textFooter:{
    color: "#fff",
  },
  successMessage: {
    color: 'green',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignupScreen;