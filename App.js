import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MainTabs from './MainTabs';
import { PersonProvider } from './PersonContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PersonProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Connexion' }}
          />
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }} // pas de header pour les onglets
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersonProvider>
  );
}
