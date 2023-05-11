import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import Hero from './screens/HeroScreen';
import Home from './screens/HomeScreen';
import Marvel from './screens/MarvelScreen';
import MarvelHeroes from './screens/Marvel/HeroesScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hero"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerLeftContainerStyle: {
              paddingLeft: 20,
            },
        }}>
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{ 
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('./images/arrow.png')}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('./images/arrow.png')}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="Marvel"
          component={Marvel}
          options={{ 
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('./images/arrow.png')}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="MarvelHeroes"
          component={MarvelHeroes}
          options={{ 
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={require('./images/arrow.png')}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
