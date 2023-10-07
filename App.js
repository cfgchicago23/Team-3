import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Link href="/game_levels">Play Game!</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hewwo?</Text>
      <StatusBar style="auto" />

      <AnimatedCircularProgress
        size={200}
        width={3}
        fill={this.state.fill}
        tintColor="#00e0ff"
        backgroundColor="#3d5875">
        {
          (fill) => (
            <Text>
              { this.state.fill }
            </Text>
          )
        }
      </AnimatedCircularProgress>
    </View>               
  );}