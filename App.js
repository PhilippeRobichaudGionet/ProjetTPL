import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { ListValue } from './Value.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen.js';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Accueil' }} // ici tu gères le header
        />
      </Stack.Navigator>
      </NavigationContainer>
      <TextInput placeholder='Nom' style={styles.input} />
      <TextInput placeholder='Mot de passe' style={styles.input} />

      {/* Bloc pour le mot de passe + mot de passe oublié */}
      <View style={styles.passwordBlock}>
        <Pressable onPress={() => alert("Ton mot de passe est: " + ListValue.MDP)}>
          <Text style={styles.MDP}>Mot de passe oublié?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 230,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  passwordBlock: {
    width: 230,
    alignItems: 'flex-end', // pour aligner le texte à droite
  },
  MDP: {
    color: 'blue',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: -10,
    marginBottom: 10,
  },
});
