import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/redux';

import BottomNavigation from './src/components/BtNavigation' 

import Hero from './src/screens/HeroScreen';
import Home from './src/screens/HomeScreen';
import Marvel from './src/screens/MarvelScreen';
import MarvelHeroes from './src/screens/MarvelHeroes';
import Login from './src/screens/LoginScreen';
import Signup from './src/screens/SignupScreen';
import MarvelHeroesCharacters from './src/screens/MarvelHeroesCharacters';

import { Provider as PaperProvider } from 'react-native-paper';

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });
const Stack = createStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider>
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
              name="BottomNavigation"
              component={BottomNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Marvel"
                component={Marvel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MarvelHeroes"
                component={MarvelHeroes}
                options={{ headerShown: false }}
              />
                <Stack.Screen
                name="MarvelHeroesCharacters"
                component={MarvelHeroesCharacters}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;