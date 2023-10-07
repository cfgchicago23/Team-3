import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
        <Text style={styles.game_level_1_title}>Welcome to Level 1!</Text>
        <StatusBar style="auto" />
        {/* Back Button */}
        <View style={styles.back_button}>
            <Link href="/game_levels">Back</Link>
        </View>
        {/* Translucent background text */}
        <View>
        <Text style={styles.text_shaded}>Help Jan navigate her feelings! dhsdfjhaksjkgshishdfhgdsdfdfhhjhagsdjtgawudghhajsdtuawegdfjashdjtwegtshdjhsudtgsdh,jw</Text>
        </View>
        <Image
            style={styles.arrow}
            source={require('../assets/right-arrow.png')}
        />
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf7ebff',
    alignItems: 'center',
    justifyContent: 'flex-top',
    fontFamily: 'Times New Roman'
  },
  game_level_1_title: {
    marginTop: '30%',
    fontSize: 40,
    fontWeight: '100',
  },
  text_shaded: {
    backgroundColor: '#f7eed4',
    padding: '20%',
    margin: '10%',
    fontSize: '20',
  },
  arrow: {
    width: '40%',
    height: '20%',
    position: 'absolute',
    left: '10%',
    top: '75%',
  },
  back_button: {
    position: 'absolute',
    left: '10%',
    top: '5%',
    fontWeight: '100',
  }
});