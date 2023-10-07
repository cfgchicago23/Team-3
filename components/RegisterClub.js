import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function RegisterClubComponent({ onBack }) {
    const [clubName, setClubName] = useState('');
    const [clubAddress, setClubAddress] = useState('');
    const [clubCoordinatorName, setClubCoordinatorName] = useState('');
    const [clubCoordinaterEmail, setClubCoordinatorEmail] = useState('');

    const handleRegistration = () => {
        console.log('Club Name:', clubName);
        console.log('Club Address:', clubAddress);
        console.log('Club Coordinator Name:', clubCoordinatorName);
        console.log('Coordinator Email:', clubCoordinaterEmail);
    };
      
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Register a Club</Text>

        <TextInput
          style={styles.input}
          placeholder="Club Name"
          value={clubName}
          onChangeText={setClubName}
        />

        <TextInput
          style={styles.input}
          placeholder="Club Address"
          value={clubAddress}
          onChangeText={setClubAddress}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Club Coordinator Name"
          value={clubCoordinatorName}
          onChangeText={setClubCoordinatorName}
        />

        <TextInput
          style={styles.input}
          placeholder="Club Coordinator Email"
          value={clubCoordinaterEmail}
          onChangeText={setClubCoordinatorEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBack} style={styles.goBackButton}>
            <Text style={styles.arrowText}>&larr; Back</Text> 
        </TouchableOpacity>
        </ScrollView>
    );
    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: '#f8f8f8'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginBottom: 30,
          textAlign: 'center'
        },
        input: {
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 10,
          width: '100%',
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        },
        button: {
          backgroundColor: '#E74C3C',
          padding: 16,
          borderRadius: 50,
          width: '100%',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginBottom: 20
        },
        buttonText: {
          color: '#fff',
          fontWeight: '600',
          fontSize: 18
        },
        goBackButton: {
            position: 'absolute',
            left: -5,
            bottom: -65,         
            width: 80,           
            height: 35,         
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 15,   
            backgroundColor: '#E74C3C',
            zIndex: 1
        },
        arrowText: {
            color: '#fff',
            fontWeight: '400',
            fontSize: 18
        },
        goBackText: {
            color: '#fff',  
            fontWeight: 'bold'
        }
    
      });

export default RegisterClubComponent;
