import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  const handleBackToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.thankYouText}>Thank you for using the app!</Text>
      <Button title="Back to Home" onPress={handleBackToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LogoutScreen;
