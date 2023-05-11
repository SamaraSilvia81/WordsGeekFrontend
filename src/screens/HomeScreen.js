import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <Image
        source={require('../assets/logomarvel.jpg')}
        style={styles.image}
      />
      <Image source={require('../assets/dclogo.png')} style={styles.image} />
      <Text style={styles.text}>
        Clique nas opções para descobrir mais desses universos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#23232E',
    justifyContent: 'center',
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginBottom: 50,
  },
  text: {
    color: '#ffff',
    textAlign: 'center',
    marginHorizontal: 30,
  },
});

export default HomeScreen;
