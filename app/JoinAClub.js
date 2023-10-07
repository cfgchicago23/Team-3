import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const mockClubs = [
  { id: '1', name: 'Downtown Club' },
  { id: '2', name: 'Westside Club' },
  { id: '3', name: 'Eastside Club' },
  // ... add more mock clubs as needed
];

function JoinAClub() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [selectedClub, setSelectedClub] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const filteredClubs = mockClubs.filter(club => club.name.toLowerCase().startsWith(location.toLowerCase()));

  const handleSelectClub = (club) => {
    setSelectedClub(club);
    setLocation(club.name);
    setShowDropdown(false);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
    setShowDropdown(!!text); // Hide dropdown if text is empty
    if (!text) {
      setSelectedClub(null); // Clear selected club if text is cleared
    }
  };

  const handleJoin = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Selected Club:', selectedClub);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Join a Club!</Text>

      <TextInput
        style={styles.input}
        placeholder="Search for Club by Name"
        value={location}
        onChangeText={handleLocationChange}
      />

      {showDropdown && (
        <View style={styles.dropdown}>
          {filteredClubs.length > 0 ? (
            filteredClubs.map(club => (
              <TouchableOpacity key={club.id} style={styles.clubItem} onPress={() => handleSelectClub(club)}>
                <Text>{club.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noClubText}>Club doesn't exist</Text>
          )}
        </View>
      )}

      {selectedClub && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.button} onPress={handleJoin}>
            <Text style={styles.buttonText}>Join</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8'
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
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    maxHeight: 150,
  },
  clubItem: {
    padding: 10,
    borderBottomColor: '#E0E0E0', 
    borderBottomWidth: 1,
  },
  noClubText: {
    padding: 15,
    textAlign: 'center',
    color: '#B0B0B0',
  }
});

export default JoinAClub;
