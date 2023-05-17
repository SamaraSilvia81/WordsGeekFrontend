import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const AuthScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Cadastrar"
        onPress={handleSignup}
        containerStyle={styles.buttonContainer}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        containerStyle={styles.buttonContainer}
      />
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
  buttonContainer: {
    marginBottom: 10,
    width: '80%',
  },
});

export default AuthScreen;