import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';

export default function Forum( {onBack} ) {
  /* bolding text */
  const Strong = (props) => <Text style={{fontWeight: "bold"}}>{props.children}</Text>

  /* user list generation */
  const users = ["User #1", "User #2", "User #3", "User #4", "User #5", "User #6", "User #7", "User #8", "User #9", "User #10", "User #11", "User  #12", "User #13", "User #14", "User #15", "User #16", "User #17", "User #18", "User #19", "User #20"];

  let message_list = [];

  users.forEach((user, index) => {
    message_list.push(<View key={index} style={styles.message}>
      <View>
        <Image style={styles.icon} source={require('../assets/user_bingge_liu.png')} />
      </View>
      <View>
        <Text style={styles.username}>{user}</Text>
      </View>
    </View>)
  });

  /* thread list generation */
  const threads = ["Thread #20", "Thread #19", "Thread #18", "Thread #17", "Thread #16", "Thread #15", "Thread #14", "Thread #13", "Thread #12", "Thread #11", "Thread #10", "Thread #9", "Thread #8", "Thread #7", "Thread #6", "Thread #5", "Thread #4", "Thread #3", "Thread #2", "Thread #1"];

  let thread_list = [];

  threads.forEach((thread, index) => {
    thread_list.push(<View key={index} style={styles.message}>
      <View>
        <Image style={styles.icon} source={require('../assets/hashtag-mayor-icons.png')} />
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
            <Text style={styles.messages_text}><Strong>Messages</Strong></Text>
            <SafeAreaView style={styles.safe_area}>
              <ScrollView>
                {message_list}
              </ScrollView>
            </SafeAreaView>
          </View>
          <View style={styles.threads_box}>
            <Text style={styles.text}><Strong>Threads</Strong></Text>
            <SafeAreaView style={styles.safe_area}>
              <ScrollView>
                {thread_list}
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.welcome}>
            <Text style={styles.text}><Strong>Welcome, Club Leader!</Strong></Text>
          </View>
          <View style={styles.announcements}>
            <Text style={styles.text}><Strong>Announcements</Strong></Text>
            <SafeAreaView style={styles.announcement_box}>
              <ScrollView>
                <View style={styles.individual_announcement}>
                    <Text style={styles.announcement_title}><Strong>First Meetup Soon!</Strong></Text>
                    <Text>We're going to have our first in-person meetup at Location, Address...</Text>
                </View>
                <View style={styles.individual_announcement}>
                  <Text style={styles.announcement_title}><Strong>Welcome to Downtown Club!</Strong></Text>
                  <Text>We are so glad to have you here! :D Feel free to introduce yourself below.</Text>
                </View>
                <View style={styles.end_of_announcement}>
                  <Text>End of announcements...</Text>
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
          <View style={styles.club_members}>
            <Text style={styles.text}><Strong>Downtown Club's Info</Strong></Text>
            <Text style={styles.text}>Information about Club</Text>
            <Text style={styles.text}>Club Roster</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onBack} style={styles.goBackButton}>
        <Text style={styles.arrowText}>&larr; Back</Text> 
      </TouchableOpacity>
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
    backgroundColor: '#ebc388',
    height: Dimensions.get('window').height/2,
    paddingTop: 20,
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
    width: 20,
    height: 20
  },
  username: {
    paddingLeft: 10
  },
  threads_box: {
    backgroundColor: '#ebc388',
    height: Dimensions.get('window').height/2,
    alignItems: 'center',
    borderTopColor: '#413626',
    borderTopWidth: 5/2,
    paddingTop: 5
  },
  thread_info: {
    paddingLeft: 10
  },
  main: {
    flex: 2,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    backgroundColor: '#e39cbc',
    paddingTop: 20,
    alignItems: 'center'
  },
  welcome: {
    marginBottom: 30
  },
  announcements: {
    height: Dimensions.get('window').height/2,
    alignItems: 'center'
  },
  announcement_box: {
    backgroundColor: '#f0ead6',
    color: "#c4c4c4", 
    marginTop: 10,
    marginBottom: 10,
    width: 250
  },
  individual_announcement: {
    padding: 10,
    borderBottomColor: '#413626',
    borderBottomWidth: 1,
  },
  announcement_title: {
    color: "#413626"
  },
  end_of_announcement: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  club_members: {
    height: Dimensions.get('window').height/3,
    alignItems: 'center'
  },
  text: {
    color: "#ffffff"
  },
  goBackButton: {
    flex: 1,
    position: 'absolute',
    left: 200,
    bottom: -65,         
    width: 80,           
    height: 35,          
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,    
    backgroundColor: '#E74C3C',
    zIndex: 1
  },
  arrowText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18
  }
});