import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

/**
 * Main component representing the React Native application.
 * Renders a basic structure with a status bar and a body containing app content.
 *
 * @return {JSX.Element} The component JSX containing the app layout.
 */
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
