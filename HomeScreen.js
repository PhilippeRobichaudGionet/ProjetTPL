import React, { useState, useContext } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { PersonContext } from './PersonContext';

export default function HomeScreen({ navigation }) {
    const [nom, setNom] = useState('');
    const [mdp, setMdp] = useState('');
    const { setPerson } = useContext(PersonContext);

    const handleLogin = () => {
        if (nom && mdp === 'Verite') {
            setPerson(prev => ({ ...prev, nom, motDePasse: mdp }));
            navigation.navigate('Main'); // vers la navigation avec onglets
        } else {
            alert("Nom ou mot de passe incorrect");
        }
    };

    return (
        <View style={[styles.container,{ backgroundColor: '#eee' }]}>
            <TextInput placeholder="Nom" style={styles.input} onChangeText={setNom} />
            <TextInput
                placeholder="Mot de passe"
                style={styles.input}
                secureTextEntry
                onChangeText={setMdp}
            />
            <Pressable onPress={handleLogin} style={styles.btn}>
                <Text style={styles.btnText}>Se connecter</Text>
            </Pressable>
            <Text style={styles.nomAffiche}>{nom ? `Nom : ${nom}` : ''}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    input: {
        height: 40,
        width: 230,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    btn: {
        backgroundColor: '#003366',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    btnText: { color: '#fff' },
    nomAffiche: { marginTop: 20 },
});
