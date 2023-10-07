import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  /* user list generation */
  const users = ["User #1", "User #2", "User #3", "User #4", "User #5", "User #6", "User #7", "User #8", "User #9", "User #10", "User #11", "User #12", "User #13", "User #14", "User #15"];

  let message_list = [];

  users.forEach((user, index) => {
    message_list.push(<View key={index} style={styles.message}>
      <View style={styles.icon}></View>
      <View>
        <Text style={styles.username}>{user}</Text>
      </View>
    </View>)
  });

  /* thread list generation */
  const threads = ["Thread #1", "Thread #2", "Thread #3", "Thread #4", "Thread #5", "Thread #6", "Thread #7", "Thread #8", "Thread #9", "Thread #10", "Thread #11", "Thread #12", "Thread #13", "Thread #14", "Thread #15"];

  let thread_list = [];

  threads.forEach((thread, index) => {
    thread_list.push(<View key={index} style={styles.message}>
      <View>
        <Image style={styles.hashtag_icon} source={require('./assets/hashtag-mayor-icons.png')} />
      </View>
      <View>
        <Text style={styles.thread_info}>{thread}</Text>
      </View>
    </View>)
  });

  return (
    <View>
      <View style={styles.content}>
        <View style={styles.sidebar}>
          <View style={styles.messages_box}>
            <Text style={styles.messages_text}>Messages</Text>
            <SafeAreaView style={styles.safe_area}>
              <ScrollView>
                {message_list}
              </ScrollView>
            </SafeAreaView>
          </View>
          <View style={styles.threads_box}>
            <Text style={styles.text}>Threads</Text>
            <SafeAreaView style={styles.safe_area}>
              <ScrollView>
                {thread_list}
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.welcome}>
            <Text style={styles.text}>Welcome!</Text>
          </View>
          <View style={styles.announcements}>
            <Text style={styles.text}>Announcements</Text>
          </View>
          <View style={styles.club_members}>
            <Text style={styles.text}>Club: [Club Leader's Club Name]</Text>
            <Text style={styles.text}>Information about Club</Text>
            <Text style={styles.text}>Club Roster</Text>
          </View>
        </View>
      </View>
      {/*<Text style={styles.text}>Open up App.js to start working on your app!</Text>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: '100%'
  },
  sidebar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  messages_box: {
    backgroundColor: '#e4c9d4',
    height: Dimensions.get('window').height/2,
    paddingTop: 60,
    alignItems: 'center',
  },
  messages_text: {
    color: "#ffffff",
  },
  safe_area: {
    width: '100%',
    paddingBottom: 100
  },
  message: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10
  },
  icon: {
    backgroundColor: '#000000',
    width: 20,
    height: 20,
    borderRadius: 20/2
  },
  username: {
    paddingLeft: 10
  },
  threads_box: {
    backgroundColor: '#e4c9d4',
    height: Dimensions.get('window').height/2,
    alignItems: 'center',
    borderTopColor: '#e08daf',
    borderTopWidth: 5/2,
    paddingTop: 5
  },
  hashtag_icon: {
    width: 20,
    height: 20
  },
  thread_info: {
    paddingLeft: 10
  },
  main: {
    flex: 2,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    backgroundColor: '#40add1',
    paddingTop: 60,
    alignItems: 'center'
  },
  welcome: {
    marginBottom: 30
  },
  announcements: {
    height: Dimensions.get('window').height/2
  },
  club_members: {
    height: Dimensions.get('window').height/3,
    alignItems: 'center'
  },
  text: {
    color: "#ffffff"
  }
});
