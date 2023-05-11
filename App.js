import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Hero from './src/screens/HeroScreen';
import Home from './src/screens/HomeScreen';
import Marvel from './src/screens/MarvelScreen';
import MarvelHeroes from './src/screens/MarvelHeroes';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#23232E',
                height: 80,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Marvel"
            component={Marvel}
            options={{
              headerStyle: {
                backgroundColor: '#23232E',
                height: 80,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="MarvelHeroes"
            component={MarvelHeroes}
            options={{
              headerStyle: {
                backgroundColor: '#23232E',
                height: 80,
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;