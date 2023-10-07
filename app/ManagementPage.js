import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EvaluationFormComponent from '../components/EvaluationForm';
import RegisterClubComponent from '../components/RegisterClub';
import RegisterParticipantComponent from '../components/RegisterParticipant';

function ManagementPage() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleBack = () => {
    setSelectedComponent(null); 
  };
``
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'registerParticipant':
        return <RegisterParticipantComponent onBack={handleBack} />;
      case 'registerClub':
        return <RegisterClubComponent onBack={handleBack} />;
      case 'evaluationForm':
        return <EvaluationFormComponent onBack={handleBack} />;
      default:
        return null;
    }
  };

  if (selectedComponent) {
    return renderSelectedComponent();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.headerText}>Management Page</Text>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedComponent('registerParticipant')}>
        <Text style={styles.buttonText}> Register a Participant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedComponent('registerClub')}>
        <Text style={styles.buttonText}> Register Your Club</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedComponent('evaluationForm')}>
        <Text style={styles.buttonText}> Fill Out Evaluation Form</Text>
      </TouchableOpacity>
    </View>
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
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 50,
    color: '#34495E',
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
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18
  },
});

export default ManagementPage;
