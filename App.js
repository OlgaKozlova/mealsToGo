import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

/**
 * Main component representing the React Native application.
 * Renders a basic structure with a status bar and a body containing app content.
 *
 * @return {JSX.Element} The component JSX containing the app layout.
 */
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.statusbar}>
          <Text>Our react native app</Text>
        </View>
        <View style={styles.body}>
          <Text>Our react native app 4</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  statusbar: {
    padding: 16,
    backgroundColor: 'green',
  },
  body: {
    padding: 16,
    backgroundColor: 'blue',
    flex: 1,
  },
});
