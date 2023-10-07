import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function RegisterParticipantComponent({ onBack }) {
  const [participantName, setParticipantName] = useState('');
  const [participantEmail, setParticipantEmail] = useState('');
  const [participantPhone, setParticipantPhone] = useState('');

  const handleRegistration = () => {
    // Handle the registration logic, e.g., sending data to the server.
    console.log('Participant Name:', participantName);
    console.log('Participant Email:', participantEmail);
    console.log('Participant Phone:', participantPhone);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register a Participant</Text>

      <TextInput
        style={styles.input}
        placeholder="Participant Name"
        value={participantName}
        onChangeText={setParticipantName}
      />

      <TextInput
        style={styles.input}
        placeholder="Participant Email"
        value={participantEmail}
        onChangeText={setParticipantEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Participant Phone Number"
        value={participantPhone}
        onChangeText={setParticipantPhone}
        keyboardType="phone-pad"
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

export default RegisterParticipantComponent;
