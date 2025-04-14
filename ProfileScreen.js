import React, { useContext } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { PersonContext } from './PersonContext';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const { person } = useContext(PersonContext);

  return (
    <View style={[styles.container, { backgroundColor: person.couleur }]}>
      <Text style={styles.nom}>Nom : {person.nom}</Text>
      <Image
        source={
          person.image
            ? { uri: person.image }
            : require('./assets/avatar.png') // image par défaut
        }
        style={styles.image}
      />

      <View style={styles.iconRow}>
        <Ionicons name="volume-high" size={30} />
        <Pressable onPress={() => navigation.navigate('Paramètres')}>
          <Ionicons name="settings" size={30} color="#333" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  nom: { fontSize: 18, marginBottom: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  iconRow: { flexDirection: 'row', gap: 30 },
});
