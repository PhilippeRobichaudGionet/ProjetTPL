import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ProfilContext } from './ProfilContext';

export default function SettingsScreen() {
  const { User, setUser } = useContext(ProfilContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(User.couleur);

  const [couleurs, setCouleurs] = useState([
    { label: 'aquamarine' , value: 'aquamarine' },
    { label: 'blanc' , value: 'white' },
    { label: 'bleu alice' , value: 'aliceblue' },
    { label: 'rose pâle' , value: 'pink' },
    { label: 'crème menthe' , value: 'mintcream' },
    { label: 'lavande' , value: 'lavender' },
    { label: 'jaune clair' , value: 'lightyellow' },
    { label: 'pêche' , value: 'peachpuff' },
    { label: 'bleu clair' , value: 'lightblue' },
    { label: 'gris perle' , value: 'gainsboro' },
    { label: 'corail doux' , value: 'lightcoral' },
    { label: 'vert anis' , value: 'honeydew' },
    { label: 'ciel d’été' , value: 'skyblue' },
    { label: 'lavande foncée' , value: 'thistle' },
    { label: 'beige' , value: 'beige' },
    { label: 'miel doré', value: 'moccasin' },
  ]);  

  useEffect(() => {
    setUser(prev => ({ ...prev, couleur: value }));
  }, [value]);

  const couleurFond = couleurs.map(item => ({
    ...item,
    label: `  ${item.label}`,
    icon: () => (
      <View style={[styles.colorPreview, { backgroundColor: item.value }]} />
    ),
  }));

  return (
    <View style={[styles.container, { backgroundColor: User.couleur }]}>
      <Text style={styles.label}>Paramètres pour {User.nom}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={couleurFond}
        setOpen={setOpen}
        setValue={setValue}
        setCouleurs={setCouleurs}
        containerStyle={{ width: 200 }}
        style={{ backgroundColor: '#fafafa' }}
        dropDownContainerStyle={{ backgroundColor: '#fafafa' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 10 },
  colorPreview: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 8,
  },
});
