import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfilProvider } from './ProfilContext';
import HomeScreen from './HomeScreen';
import MainTabs from './MainTabs';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProfilProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Paramètres" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfilProvider>
  );
}
