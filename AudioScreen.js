import React, { useState, useEffect, useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { PersonContext } from './PersonContext';

export default function AudioScreen() {
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const { setPerson, person } = useContext(PersonContext);

  useEffect(() => {
    Audio.requestPermissionsAsync();
  }, []);

  const startRecording = async () => {
    try {
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = async () => {
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setPerson(prev => ({ ...prev, audio: uri }));
    setRecording(null);
  };

  const playSound = async () => {
    if (person.audio) {
      const { sound } = await Audio.Sound.createAsync({ uri: person.audio });
      setSound(sound);
      await sound.playAsync();
    }
  };

  const deleteAudio = () => {
    setPerson(prev => ({ ...prev, audio: null }));
  };

  return (
    <View style={styles.container}>
      {recording ? (
        <Button title="Arrêter" onPress={stopRecording} />
      ) : (
        <Button title="Commencer l'enregistrement" onPress={startRecording} />
      )}
      <Button title="Écouter" onPress={playSound} disabled={!person.audio} />
      <Button title="Supprimer" onPress={deleteAudio} disabled={!person.audio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
