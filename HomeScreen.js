import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Light blue background color
  },
  welcomeText: {
    fontSize: 28, // Increased font size
    fontWeight: 'bold',
    color: '#333', // Dark gray text color
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
