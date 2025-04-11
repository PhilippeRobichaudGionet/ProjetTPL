import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native';
import { ListValue } from './Value.js';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Nom' style={styles.input} />
      <TextInput placeholder='Mot de passe' style={styles.input} />
      <Pressable onPress={() => alert("Ton mot de passe est: "+ ListValue.MDP)}>
        <Text>Mot de passe oublié?</Text>
      </Pressable>
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
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  }
});
