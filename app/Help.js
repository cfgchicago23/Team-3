import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Button, Linking, StyleSheet, SafeAreaView,TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function EmergentHelp ()  {
  //actual hotline number is: 8883737888
  //actual sms number is: 233733
  const hotlineNumber = '8883737888'; 
  const smsNumber = '233733'
  const message = "INFO"
  const separator = Platform.OS === 'ios' ? '&' : '?'

  const callHotline = () => {
    Linking.openURL(`tel:${hotlineNumber}`);
  };
  const textHotline = () => {
    const separator = Platform.OS === 'ios' ? '&' : '?'
    const url = `sms:${smsNumber}${separator}body=${message}`
    Linking.openURL(url)
  };

    const AboutHumanTraffickingChart = () => {
    const pdf1Url = 'https://www.daughterproject.org/_files/ugd/b3c82c_b20873b9c6b640308f5d2c3a333a015f.pdf';
    Linking.openURL(pdf1Url);
  };
  
  const TheoryOfChange = () => {
    const pdf2Url = 'https://www.daughterproject.org/_files/ugd/b3c82c_b8320ae1d7054a5aa3d9a7b7fd1e42bd.pdf';
    Linking.openURL(pdf2Url);
  };

  const sendEmail = () => {
    const email = 'info@myglobalfamily.org'; 
    const subject = 'Subject of the email'; 
  
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
    Linking.openURL(url)
      .then(() => {
        console.log(`Opened email client to send email to ${email}`);
      })
      .catch((err) => {
        console.error('Error opening email client:', err);
      });
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Resources for Emergent Help</Text>
      <TouchableOpacity style={styles.Button} onPress={callHotline}>
          <Text style={styles.ButtonText}>Call for help NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={textHotline}>
          <Text style={styles.ButtonText}>Text for help NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={sendEmail}>
  <Text style={styles.ButtonText}>Contact Global Family Care Network</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={AboutHumanTraffickingChart}>
    <Text style={styles.ButtonText}>About Human Trafficking Chart</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={TheoryOfChange}>
    <Text style={styles.ButtonText}>Theory of Change</Text>
    </TouchableOpacity>
    

    </SafeAreaView>
  );
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