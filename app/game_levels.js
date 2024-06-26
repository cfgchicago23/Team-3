import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
// first button handler
const button1ClickedHandler = () => {
<Link href="/game_level_1">Game 1</Link>
};
  return (
    //<View>
      <View style={styles.game_title}>
        <Text style={styles.game_title}>Thrive Challenge</Text>
        {/* Rows of buttons to different levels of the game */}
        {/* -------------------------- ROW 1 --------------------------- */}
        <View style={styles.screen1}>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button1}>
              <Link href="/game_level_1">Game 1</Link>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button2}>
            <Link href="/game_level_1">Game 2</Link>
          </TouchableOpacity>
        </View>
         {/* -------------------------- ROW 2 --------------------------- */}
        <View style={styles.screen2}>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button1}>
            <Link href="/game_level_1">Game 3</Link>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button2}>
            <Text>Game 4</Text>
          </TouchableOpacity>
       </View>
        {/* -------------------------- ROW 3 --------------------------- */}
       <View style={styles.screen3}>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button1}>
            <Text>Game 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button2}>
            <Text>Game 6</Text>
          </TouchableOpacity>
       </View>
        {/* -------------------------- ROW 4 --------------------------- */}
       <View style={styles.screen4}>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button1}>
            <Text>Game 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={button1ClickedHandler}
            style={styles.button2}>
            <Text>Game 8</Text>
          </TouchableOpacity>
       </View>
      </View>
  );
}


// <----------------------- STYLING --------------------------->
const styles = StyleSheet.create({
  // Game title styling
  game_title: {
    marginTop: '7%',
    fontSize: 40,
    flex: 1,
    backgroundColor: '#fbf7ebff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: '100',
  },
  // Row 1 Positioning
  screen1: {
    marginTop: '20%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Row 2 Positioning
  screen2: {
    marginTop: '60%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Row 3 Positioning
  screen3: {
    marginTop: '100%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Row 4 Positioning
  screen4: {
    marginTop: '140%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button1: {
    margin: 'auto',
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: '10%',
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  button2: {
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: '10%',
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
    flex: 1,
    backgroundColor: '#fbf7ebff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: '100',
  },
  // Row 1 Positioning
  screen1: {
    marginTop: '20%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Row 2 Positioning
  screen2: {
    marginTop: '60%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Row 3 Positioning
  screen3: {
    marginTop: '100%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Row 4 Positioning
  screen4: {
    marginTop: '140%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button1: {
    margin: 'auto',
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: '10%',
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  button2: {
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: '10%',
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
  button3: {
    margin: 'auto',
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
  },
  button4: {
    width: 120,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: '5%',
    borderRadius: 100,
    backgroundColor: 'pink',
  },
});
