import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');
  const [autoFocus, setAutoFocus] = useState(true);
  const [zoom, setZoom] = useState(0);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Nous avons besoins de votre accord pour utiliser votre camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleAutoFocus() {
    setAutoFocus(prev => !prev);
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        zoom={zoom}
        autoFocus={autoFocus ? 'on' : 'off'}
      >
        <View style={styles.controls}>
          <TouchableOpacity onPress={toggleCameraFacing} style={styles.button}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleAutoFocus} style={styles.button}>
            <Text style={styles.text}>
              AutoFocus: {autoFocus ? 'ON' : 'OFF'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.zoomSlider}>
          <Text style={styles.text}>Zoom: {(zoom * 100).toFixed(0)}%</Text>
          <Slider
            style={{ width: 200 }}
            minimumValue={0}
            maximumValue={1}
            value={zoom}
            onValueChange={value => setZoom(value)}
            minimumTrackTintColor="#ffffff"
            maximumTrackTintColor="#000000"
          />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#00000055',
    paddingVertical: 10,
  },
  zoomSlider: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#00000055',
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ffffff44',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
