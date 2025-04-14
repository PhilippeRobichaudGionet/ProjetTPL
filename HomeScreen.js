import React from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nom" style={styles.input} />
      <TextInput placeholder="Mot de passe" style={styles.input} />
      <View style={styles.passwordBlock}>
        <Pressable onPress={() => alert("Mot de passe oublié !")}>
          <Text style={styles.MDP}>Mot de passe oublié ?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    width: 230,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordBlock: {
    width: 230,
    alignItems: 'flex-end',
    marginTop: 5,
  },
  MDP: {
    color: 'blue',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
