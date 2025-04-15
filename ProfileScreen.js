import React, { useContext } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { ProfilContext } from './ProfilContext';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const { User, setUser } = useContext(ProfilContext);

  return (
    <View style={[styles.container, { backgroundColor: User.couleur }]}>
      <Text style={styles.nom}>Nom : {User.nom}</Text>
      <Image
        source={
          User.image
            ? { uri: User.image }
            : require('./assets/avatar.png')
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
