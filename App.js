import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Home from './app/home'
import ParticipantLandingPage from '.app/ParticipantLandingPage'

export default function App() {
  return (
    <ParticipantLandingPage />
    //<Home />  // Render the Home component
  );
}

