import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { PersonContext } from './PersonContext';

export default function SettingsScreen() {
  const { person, setPerson } = useContext(PersonContext);

  const colors = [
    { label: 'aquamarine', value: 'aquamarine' },
    { label: 'blanc', value: 'white' },
    { label: 'bleu alice', value: 'aliceblue' },
    { label: 'rose pâle', value: 'pink' },
    { label: 'crème menthe', value: 'mintcream' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: person.couleur }]}>
      <Text style={styles.label}>Paramètres pour {person.nom}</Text>
      <DropDownPicker
        items={colors}
        defaultValue={person.couleur}
        containerStyle={{ height: 40, width: 200 }}
        style={{ backgroundColor: '#fafafa' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item =>
          setPerson(prev => ({ ...prev, couleur: item.value }))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 10 },
});
