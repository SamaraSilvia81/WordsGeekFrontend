import React from 'react';
import { View, TouchableOpacity, Image,StatusBar } from 'react-native';

function HeroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../public/WorldGeekTransparent.png')}
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

export default HeroScreen;