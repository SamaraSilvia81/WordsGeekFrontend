import React from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

function MarvelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <TouchableOpacity onPress={() => navigation.navigate('MarvelHeroes')}>
        <Image
          source={require('../../public/logomarvel.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MarvelVillians')}>
        <Image 
          source={require('../../public/dclogo.png')} 
          style={styles.image} 
        />
      </TouchableOpacity>
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

export default MarvelScreen;