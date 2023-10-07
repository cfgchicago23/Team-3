import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
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
        style={styles.girl}
        source={require('Team-3/assets/right-arrow.png')}
      />
    </View>
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
  girl: {
    
  }
  back_button: {
    position: 'absolute',
    left: '10%',
    top: '5%',
    fontWeight: '100',
  }
});