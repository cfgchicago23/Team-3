import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HelpPage ()  {
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


  return (
    <View>
      <Text>List of Resources:</Text>
    {/* stuff */}
    <Text>{`Hotline: ${hotlineNumber}`}</Text>
    <Button title="Call Hotline" onPress={callHotline} />
    <Button title="Text INFO" onPress={textHotline} />
  </View>
  );
}


