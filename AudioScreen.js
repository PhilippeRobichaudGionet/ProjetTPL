import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { ProfilContext } from './ProfilContext';
import { Ionicons } from '@expo/vector-icons';

export default function AudioScreen() {
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const { User, setUser } = useContext(ProfilContext);

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
    setUser(prev => ({ ...prev, audio: uri }));
    setRecording(null);
  };

  const playSound = async () => {
    try {
      if (User.audio) {
        console.log("Lecture de :", User.audio);
        const { sound } = await Audio.Sound.createAsync(
          { uri: User.audio },
          { shouldPlay: true }
        );
        setSound(sound);
  
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            sound.unloadAsync();
          }
        });
      } else {
        console.log("Aucun audio à lire.");
      }
    } catch (error) {
      console.error("Erreur de lecture :", error);
    }
  };
  
  const deleteAudio = () => {
    try {
      if (sound) {
        sound.unloadAsync();
        setSound(null);
      }
      setUser(prev => ({ ...prev, audio: null }));
      console.log("Audio supprimé");
    } catch (error) {
      console.error("Erreur de suppression :", error);
    }
  };

  if (!User) {
    return <Text>Chargement du profil...</Text>;
  }

  return (
    <View style={[styles.container, { backgroundColor: User?.couleur || '#7FFFD4' }]}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={playSound} disabled={!User.audio}>
          <Ionicons name="volume-high" size={32} color={!User.audio ? "#ccc" : "#0000ff"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteAudio} disabled={!User.audio}>
          <Ionicons name="trash" size={32} color={!User.audio ? "#ccc" : "#ff0000"} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.recordButton}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text style={styles.recordButtonText}>
          {recording ? "ARRÊTER" : "COMMENCER L'ENREGISTREMENT"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.uriText}>Uri: {User.audio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  recordButton: {
    backgroundColor: '#003366',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginVertical: 20,
  },
  recordButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  uriText: {
    fontSize: 14,
    marginTop: 10,
    color: '#333',
  },
});
