import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
        {/* Header */}
        <Text style={styles.headerText}>ThriveForGirls</Text>

        {/* Main Content */}
        <Text style={styles.title}>Love. Create. Share.</Text>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Empower provides young girls with the tools they need to build healthy and lasting friendships.{"\n"}
          </Text>
          <Text style={styles.description}>
            We work with girls to help them rise up beyond their circumstances, become role models in their communities, and learn how to recognize abuse and exploitation. 
          </Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity zstyle={styles.loginButton}>
            <Link href="/game_levels">Game Levels (TESTING)</Link>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: 30, // Increased padding 
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 36,
    fontWeight: '900', // Bolder
    textAlign: 'center',
    marginTop: 60, // More spacing
  },
  title: {
    fontSize: 30,
    fontWeight: '700', 
    textAlign: 'center',
    marginTop: 60,
  },
  description: {
    fontSize: 16,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',  // Semi-transparent white
    padding: 20,  // Padding around the text
    borderRadius: 10,  // Rounded corners
    marginTop: 30,  // Some spacing from the title
    marginBottom: 30,  // Some spacing before the button
  },
  loginButton: {
    marginTop: 90,
    backgroundColor: '#E74C3C',  // Slightly different shade of red
    padding: 16,
    borderRadius: 50,  // Full rounded edges
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',  // Less width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    top: '50%',

  },
  loginText: {
    color: '#fff',
    fontWeight: '600',  // Slightly less bold
    fontSize: 18  // Bigger font size
  },
});

export default Home;


