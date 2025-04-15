import React, { useState, useContext } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Alert } from 'react-native';
import { ProfilContext } from './ProfilContext';

export default function HomeScreen({ navigation }) {
    const [nom, setNom] = useState('');
    const [mdp, setMdp] = useState('');
    const { setUser } = useContext(ProfilContext);

    const handleLogin = () => {
        if (nom === 'Lina' && mdp === '123') {
            setUser(prev => ({ ...prev, nom, motDePasse: mdp }));
            navigation.navigate('Main');
        } else {
            alert("Nom ou mot de passe incorrect");
        }
    };

    const handleForgotPassword = () => {
        alert("Info \nNom: Lina\nMot de passe: 123");
    };

    return (
        <View style={[styles.container, { backgroundColor: '#eee' }]}>
            <TextInput placeholder="Nom" style={styles.input} onChangeText={setNom} />
            <TextInput
                placeholder="Mot de passe"
                style={styles.input}
                secureTextEntry
                onChangeText={setMdp}
            />

            <Pressable onPress={handleForgotPassword}>
                <Text style={styles.forgot}>Mot de passe oublié ?</Text>
            </Pressable>

            <Pressable onPress={handleLogin} style={styles.btn}>
                <Text style={styles.btnText}>Se connecter</Text>
            </Pressable>
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
    forgot: {
        color: '#007AFF',
        textDecorationLine: 'underline',
        marginTop: -5,
        marginBottom: 10,
    },
});
