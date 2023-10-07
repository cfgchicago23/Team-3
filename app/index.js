import React from 'react';
import { Text, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView, AppRegistry } from 'react-native';
import { Link } from 'expo-router';
import '../firebaseConfig'
import ParticipantLandingPage from './ParticipantLandingPage';
import Login from './Login'
import { 
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export default class RootApp extends React.Component {
  constructor () {
    super();
    this.state = { 
        user: auth.currentUser,
    }
  }

  handleSignOut = () => {
    signOut(auth).then(() => {
      this.setState({user: null})
      console.log('logged out')
    }).catch((error) => {
        console.log(error); 
    });   
  }

  handleSignUp = (email, username, password) => {
    // TODO: For Firebase auth
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          displayName: username,
          email: email
        });
    })
  }

  handleLogin = (email, password) => {
      // TODO: For Firebase auth
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          this.setState({ user: auth.currentUser });
      })
  }

  componentDidMount() {
    // Add listener here
    onAuthStateChanged(auth, (user) => {
      if (user) {
          this.setState({user: user})
          // console.log('user logged in!')
      }
    })
  }

  render() {
    return (
      <>
        {this.state.user ? (
          <ParticipantLandingPage onSignOut={this.handleSignOut} />
        ) : (
          // <Home onSignup={this.handleSignUp} onLogin={this.handleLogin} />
          <Login onSignUp={this.handleSignUp} onLogin={this.handleLogin}/>
        )}
      </>
    )
  };
}

export function Home(props) {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
        {/* Header */}
        <Text style={styles.headerText}>ThriveForGirls</Text>

        {/* Main Content */}
        <Text style={styles.title}>Love. Create. Share.</Text>
        <Text style={styles.description}>
        Empower provides young girls with the tools they need to build healthy and lasting friendships. We work with girls to help them rise up beyond their circumstances, become role models in their communities, and learn how to recognize abuse and exploitation. 
        </Text>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Link href="/Login"><Text style={styles.loginText}>Log In</Text></Link>
        </TouchableOpacity>

        

      </ImageBackground>
    </SafeAreaView>
  );
}

AppRegistry.registerComponent('Appname', () => RootApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
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
  loginButton: {
    marginTop: 90,
    backgroundColor: '#E74C3C',  // Slightly different shade of red
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
  loginText: {
    color: '#fff',
    fontWeight: '600',  // Slightly less bold
    fontSize: 18  // Bigger font size
  },
});

