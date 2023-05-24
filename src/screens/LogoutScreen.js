import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authReducer';
import { useNavigation } from '@react-navigation/native';

import { View } from 'react-native';
import { Button, Dialog, Portal, Paragraph} from 'react-native-paper';

const LogoutScreen = () => {

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View>
      <Button onPress={showDialog}>Logout</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirm Logout</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Are you sure you want to logout?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={handleLogout}>Logout</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default LogoutScreen;