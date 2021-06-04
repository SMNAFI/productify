import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <CarsList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
