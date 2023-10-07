import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JoinAClub from './JoinAClub';
import "./game_levels"
import Game from './game_levels'
import Help from "./Help"

export default function ParticipantLandingPage() {
    const navigation = useNavigation();
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleBack = () => {
      setSelectedComponent(null); 
    };

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
          case 'findAClub':
            return <JoinAClub onBack={handleBack} />;
          case 'goToModules':
            return <Game onBack={handleBack} />;
          case 'getHelp':
            return <Help onBack={handleBack} />;
          default:
            return null;
        }
      };

    if (selectedComponent) {
        return renderSelectedComponent();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome Person!</Text>

        {/* Button 1 */}
        <TouchableOpacity style={styles.button} onPress={() => setSelectedComponent('findAClub')}>
          <Text style={styles.buttonText}>Find a Club</Text>
        </TouchableOpacity>

        {/* Button 2 */}
        {/* <Link href="/game_levels">Play Game!</Link> */}
        <TouchableOpacity style={styles.button} onPress={() => setSelectedComponent('goToModules')}>
          <Text style={styles.buttonText}>Go to Modules</Text>
        </TouchableOpacity>


        {/* Button 3 */}
        <TouchableOpacity style={styles.button} onPress={() => setSelectedComponent('getHelp')}>
          <Text style={styles.buttonText}>Get Help</Text>
        </TouchableOpacity>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.button} onPress={() => props.onSignOut?.()}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 50,
    color: '#34495E'
  },
  button: {
    marginTop: 50,
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
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',  // Slightly less bold
    fontSize: 18  // Bigger font size
  },
});
