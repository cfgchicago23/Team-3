import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
        {/* Title text */}
        <Text style={styles.game_level_1_title}>Welcome to Level 1!</Text>
        <StatusBar style="auto" />
        {/* Back button */}
        <TouchableOpacity onPress={onBack} style={styles.goBackButton}>
            <Text style={styles.arrowText}>&larr; Back</Text> 
        </TouchableOpacity>
        {/* Translucent background text */}
        <View>
            <Text style={styles.text_shaded}>Help Jan navigate her feelings! dhsdfjhaksjkgshishdfhgdsdfdfhhjhagsdjtgawudghhajsdtuawegdfjashdjtwegtshdjhsudtgsdh,jw</Text>
        </View>
        <Image
            style={styles.girl}
            source={require('../assets/Girl.png')}
        />
        {/* Forward arrow */}
        <Image
            style={styles.arrow}
            source={require('../assets/right-arrow.png')}
        />
    
        <Link href="/game_level_1_pg_2">Next</Link>

    </View>
  );
}

const styles = StyleSheet.create({
    // Background styling
    container: {
        flex: 1,
        backgroundColor: '#fbf7ebff',
        alignItems: 'center',
        justifyContent: 'flex-top',
    },
    // Title styling
    game_level_1_title: {
        marginTop: '30%',
        fontSize: 40,
        fontWeight: '100',
    },
    // Text + translucent box styling 
    text_shaded: {
        backgroundColor: '#f7eed4',
        padding: '20%',
        margin: '10%',
        fontSize: 20,
    },
    // Girl image styling
    girl: {
        width: '25%',
        height: '32%',
        position: 'absolute',
        left: '70%',
        top: '50%',
    },
    // "Next" arrow styling
    arrow: {
        width: '40%',
        height: '20%',
        position: 'absolute',
        left: '10%',
        top: '75%',
    },
    // Back button styling
    back_button: {
        position: 'absolute',
        left: '10%',
        top: '5%',
        fontWeight: '100',
    }
});