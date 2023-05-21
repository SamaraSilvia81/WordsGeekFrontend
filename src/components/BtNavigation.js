import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import Home from '../screens/HomeScreen';
import Favorits from '../screens/FavoritsScreen';
import Settings from '../screens/SettingsScreen';

const BtNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EF7377"
      barStyle={{ backgroundColor: '#16161d' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='#EF7377' size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorits"
        component={Favorits}
        options={{
          tabBarLabel: 'Favorits',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="heart" color='#EF7377' size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="setting" color='#EF7377' size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BtNavigation;