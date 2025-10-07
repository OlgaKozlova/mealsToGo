import React from 'react';

import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

import { RestaurantInfoCard } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusbar}>
        <Searchbar />
      </View>
      <View style={styles.body}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  statusbar: {
    padding: 20,
    paddingTop: 30,
  },
  body: {
    padding: 16,
    backgroundColor: 'blue',
    flex: 1,
  },
});
