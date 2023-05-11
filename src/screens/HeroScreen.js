import React from 'react';
import { View, TouchableOpacity, Image,StatusBar } from 'react-native';

function LogoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <TouchableOpacity onPress={() => navigation.navigate('World´s Geek')}>
        <Image
          source={require('../assets/WorldGeekTransparent.png')}
          style={{ width: 300, height: 350 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#23232E',
    justifyContent: 'center',
  },
};

export default LogoScreen;