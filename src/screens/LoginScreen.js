import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { login } from '../redux/actions/authActions';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  useEffect(() => {
    if (auth.loggedIn) {
      navigation.navigate('Home');
    }
  }, [auth.loggedIn, navigation]);

  // Personalize o tema do PaperProvider
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#EF7377', // Cor primária (padrão) do TextInput
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {auth.error && <Text style={styles.errorText}>{auth.error}</Text>}
        <Text variant="displaySmall" style={styles.title}>
          Welcome
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
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button 
          mode="contained" 
          buttonColor='#385993'  // EF7377 385993
          onPress={handleLogin}
          style={styles.loginButton}
        >
          Login
        </Button>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Don't have an account?</Text>
          <Button
              onPress={handleSignup}
              textColor="#385993"
              mode="text"
            >
              SignUp
          </Button>
        </View>
      </View>
    </PaperProvider>
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;