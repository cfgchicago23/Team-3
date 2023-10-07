import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Button, Linking, StyleSheet, SafeAreaView,TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function FindClub ()  {
    const clubTable= [
      { id: 1, name: 'Thrive for Girls', city: 'New York', country: 'USA' },
      { id: 2, name: 'Thrive for Girls', city: 'Toronto', country: 'Canada' },
      { id: 3, name: 'Thrive for Girls', city: 'Falkirk', country: 'Scotland' },
      // Add more locations as needed
    ];
  
    const ClubLocations = () => {
      const [searchText, setSearchText] = useState('');
      const filteredLocations = clubLocations.filter(location =>
        location.city.toLowerCase().includes(searchText.toLowerCase())
      );
      return (
        <SafeAreaView style={styles.container}>
          <TextInput
            placeholder="Search by city"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <FlatList
            data={filteredLocations}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>{`${item.name} - ${item.city}, ${item.country}`}</Text>
              </View>
            )}
          />
        </SafeAreaView>
      );
  
      }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      // backgroundColor: '#808080',
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
      marginTop: 30,
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 26,  // Spacing between lines
    },
    Button: {
      marginTop: 90,
      backgroundColor: '#ffb6c1',  // Slightly different shade of red
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
    ButtonText: {
      color: '#808080',
      fontWeight: '600',  // Slightly less bold
      fontSize: 18  // Bigger font size
    },
  });