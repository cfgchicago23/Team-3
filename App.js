import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  HelpPage  from './app/Help'
import Home from './app/home'

export default function App() {
  return (
    <Home />  // Render the Home component
  //   <View style = {styles.container}>
  //     <StatusBar style="auto"/>
  //     <HelpPage/>
  //  </View>
  );
}

