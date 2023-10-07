import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // first button handler
  const button1ClickedHandler = () => {
    console.log("clicked button!")
  };
  return (
    //<View>
      <View style={styles.game_title}>
        <Text style={styles.game_title}>Thrive Challenge</Text>
        <View style={styles.screen1}>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button}>
            <Text>I'm a button</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button}>
            <Text>I'm another button</Text>
          </TouchableOpacity>
        <View style={styles.screen2}>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button}>
            <Text>I'm a button</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button}>
            <Text>I'm another button</Text>
          </TouchableOpacity>
        </View>
       </View>
      </View>
  );
}

const styles = StyleSheet.create({
  game_title: {
    marginTop: '7%',
    fontSize: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: 900,
    textDecorationLine: 'underline',
    textDecorationColor: 'pink',
  },
  screen1: {
    marginTop: '20%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 'auto',
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  screen2: {
    marginTop: '60%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
});