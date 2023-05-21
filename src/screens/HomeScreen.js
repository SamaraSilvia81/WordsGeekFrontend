import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

function HomeScreen({ navigation }) {

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Primeira seção */}
      <View style={styles.section1}>
        <Avatar.Image
          size={30}
          source={require('../../public/Logo.png')}
          style={styles.avatar}
          onPress={handleLogout}
        />
        <Text style={styles.text}>Marvel</Text>
      </View>
      {/* Segunda seção */}
      <View style={styles.section2}>
        <Text style={styles.text}>DC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  section1: {
    flex: 1,
    backgroundColor: '#EC1B23',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  section2: {
    flex: 1,
    backgroundColor: '#133267',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;