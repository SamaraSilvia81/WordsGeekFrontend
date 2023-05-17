import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Parse from 'parse/react-native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const user = new Parse.User();
    user.set('username', email);
    user.set('name', name);
    user.set('password', password);

    try {
      await user.signUp();
      console.log('Cadastro realizado com sucesso!');
    } catch (error) {
      console.log('Erro ao cadastrar:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Cadastrar"
        onPress={handleSignup}
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
});

export default SignupScreen;