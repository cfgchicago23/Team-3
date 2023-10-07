import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity  } from 'react-native'
import '../../firebaseConfig'
import { 
    getAuth, 
    getDatabase,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile, 
    setPersistence,
    signOut, 
    browserSessionPersistence
} from "firebase/auth";

const auth = getAuth();
const db = getDatabase();

export default class Login extends React.Component {
    constructor () {
        super();
        this.state = { email: '', password: '', username: '', errorMessage: null }
    }
    handleSignUp = () => {
        // TODO: For Firebase auth
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            set(ref(db, 'users/' + user.uid), {
              displayName: uname,
              email: email
            });
        })
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={{color:'#e93766', fontSize: 40}}>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="username"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                />
                <Button title="Sign Up" onPress={this.handleSignUp}/>
                <View>
                    <Text> Already have an account? <Text style={{color:'#e93766', fontSize: 18}}> Login </Text></Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});