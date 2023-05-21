import React from 'react';
import { View, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authReducer';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleAvatarPress = () => {
    dispatch(logout()); // Dispatch da action de logout
    navigation.navigate('Login'); // Redirecionar para a página de login após o logout
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

<     View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleAvatarPress}>
          <Avatar.Image
            source={require('../../public/logomarvel.jpg')}
            size={50}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Marvel')}>
        <Image
          source={require('../../public/logomarvel.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DC')}>
        <Image 
          source={require('../../public/dclogo.png')} 
          style={styles.image} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16161d',
    padding: 16,
  },
  image: {
    width: 280,
    height: 180,
    marginTop: 50,
    borderRadius: 10,
  },
  avatarContainer: {
    position: 'absolute',
    top: 20,
    left: 270,
  },
});

export default HomeScreen;