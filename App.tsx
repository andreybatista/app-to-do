import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Home } from './src/screens/Home';

export default function App() {

  return (
    <>
      <Home />

      <StatusBar style="light" />
    </>
  );
}
