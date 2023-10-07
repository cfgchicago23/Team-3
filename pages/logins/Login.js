import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity  } from 'react-native'
import '../../firebaseConfig'
import { getDatabase, ref, set } from "firebase/database";
import { 
    getAuth,
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
        this.state = { 
            page: 'signin',
            email: '', 
            password: '', 
            username: '', 
            user: null,
            message: ''
        }
    }
    componentDidMount() {
        // Add listener here
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                console.log(user)
                // this.setState({message: "Hello " + user.displayName})
                // window.location.href = '#/'; 
            }
        })
    }
    // componentWillUnmount() {
    //     this.unsubscribe();
    // }
    handleSignUp = () => {
        // TODO: For Firebase auth
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            set(ref(db, 'users/' + user.uid), {
              displayName: this.state.username,
              email: this.state.email
            });
        })
    }

    handleLogin = () => {
        // TODO: For Firebase auth
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
            const user = userCredential.user;
            this.setState({ user: auth.currentUser })
            window.location.href = '#/';
        })
    }

    toggleSignIn = () => {
        if (this.state.page === 'signin') {
            this.setState({page: 'login'})
        } else if (this.state.page === 'login') {
            this.setState({page: 'signin'})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[this.state.page === 'signin' ? styles.visible : styles.invisible]}>
                    <Text style={{color:'#e93766', fontSize: 40}}>Sign Up</Text>
                        <Text>{this.state.message}</Text>
                        <TextInput
                            placeholder="Email"
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                        />
                        <TextInput
                            placeholder="Username"
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
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
                            <Text> Already have an account? <Button onPress={this.toggleSignIn} title='Login'>Login</Button></Text>
                        </View>
                    </View>
                <View style={[this.state.page === 'login' ? styles.visible : styles.invisible]}>
                    <Text style={{color:'#e93766', fontSize: 40}}>Login</Text>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ email: text })}
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
                    <Button title="Login" onPress={this.handleLogin}/>
                    <View>
                        <Text> Don't have an account? <Button onPress={this.toggleSignIn} title='Signup'> Sign Up </Button></Text>
                    </View>
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
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    invisible: {
        display: 'none'
    },
    visible: {
        display: 'block'
    }
});