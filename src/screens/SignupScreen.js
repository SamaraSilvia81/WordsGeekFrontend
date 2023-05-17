import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { createUser, getUsers } from '../api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SignupScreen = () => {

  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
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
        (user) => user.name === name && user.email === email && user.password === password
      );
      if (existingUser) {
        // Usuário já cadastrado, redirecionar para a página inicial
        navigation.navigate('Home');
        return;
      }
      await createUserMutation.mutateAsync({ name, email, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {successMessage && <Text style={styles.successMessage}>{successMessage}</Text>}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
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