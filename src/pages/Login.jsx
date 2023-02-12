import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView,SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Foundation';
import auth from '@react-native-firebase/auth';
import SMIT from '../images/Smit.png'
import wave from '../images/waves.jpeg'
import google from '../images/google.png'

let uid;


function Login({ navigation }) {
    const [login, setLogin] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')








    const loginFunc = () => {
        if (!email) {
            alert('Please Enter Your Email')
        }
        else if (password.length < 6) {
            alert('Password must be 6 Characters Long')
        }
        else {
            login ?
                auth()
                    .signInWithEmailAndPassword(email, password)
                    .then((User) => {
                        alert('User signed in!');
                        uid = User.user.uid
                        navigation.navigate('Todo')


                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            alert('That email address is already in use!');
                        }

                        else if (error.code === 'auth/invalid-email') {
                            alert('That email address is invalid!');
                        }

                        else {
                            alert(error)
                        }

                    })
                :

                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((User) => {
                        alert('User account created & signed in!');
                        uid = User.user.uid
                        console.log(User);
                        navigation.navigate('Todo')


                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            alert('That email address is already in use!');
                        }

                        else if (error.code === 'auth/invalid-email') {
                            alert('That email address is invalid!');
                        }
                        else {
                            alert(error)
                        }

                    })

        }
    }
    return (
        <SafeAreaView>

            <ScrollView style={styles.mianCont} >


                <View>
                    <Image source={SMIT} style={styles.heading} resizeMode='contain'></Image>
                    {/* {login ? <Text style={styles.heading}>Login</Text> : <Text style={styles.heading}>Signup</Text>} */}
                </View>
                <View style={styles.container}>
                    <KeyboardAvoidingView>
                        <Text style={styles.text}>Enter Your Email Id</Text>
                        <View style={styles.input}>
                            <Icon name="email" size={20} style={styles.iconInput} />
                            <TextInput onChangeText={(e) => { setEmail(e) }} style={styles.textInput} keyboardType='email-address' />
                        </View>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.input}>
                            <Icon2 name="key" size={25} style={styles.iconInput} />
                            <TextInput secureTextEntry={true} onChangeText={e => setpassword(e)} style={styles.textInput} />
                        </View>
                    </KeyboardAvoidingView>

                    <View style={styles.switchCont}>
                        <Text style={styles.text}>Remember me</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={loginFunc}>
                        <Text style={styles.buttonText}>{login ? <Text>Login</Text> : <Text>Signup</Text>}</Text>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={[styles.text, { paddingVertical: 20 }]}>You can also {login ? <Text>Login</Text> : <Text>Signup</Text>} with</Text>
                        <View style={styles.iconsCont}>
                            <Icon name="facebook" size={40} color="#007bed" style={styles} onPress={() => alert('Facebook Login/Signup Will Be Available Soon')} />
                            <TouchableOpacity onPress={() => alert('Google Login/Signup Will Be Available Soon')}>
                                <Image source={google} style={styles.googleIcon} resizeMode='contain' onPress={() => alert('Google Login/Signup Will Be Available Soon')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -70 }}>

                            {login ?
                                <Text style={[{ textAlign: 'center' }, styles.black]}>Not Registered Yet ? <Text style={styles.signup} onPress={() => { setLogin(false) }}> Sign Up</Text> </Text> :
                                <Text style={[{ textAlign: 'center' }, styles.black]}>Already Have An Account ? <Text style={styles.signup} onPress={() => { setLogin(true) }}> Login</Text> </Text>

                            }
                        </View>
                    </View>
                </View>
                <Image source={wave} style={styles.image} resizeMode='contain'></Image>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mianCont: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    container: {
        alignSelf: 'center',
        width: '80%',
        fontFamily: 'San-Serif',
        marginTop: -40
    },
    container2: {
        alignSelf: 'center',
        width: '80%',
        fontFamily: 'San-Serif',
    },
    heading: {
        // fontSize: 30,
        // fontWeight: '700',
        // // color: 'black',
        // marginLeft: 30,
        // paddingVertical: 65,
        // color: '#af41d7',

        justifyContent: 'center',
        width: '40%',
        alignSelf: 'center',
        marginLeft: -30,
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        borderColor: '#0473ba',
    },
    textInput: {
        width: '80%',
        color: 'black'
    },

    text: {
        marginLeft: 40,
        paddingVertical: 10,
        fontWeight: '500',
        fontSize: 15,
        color: 'black'

    },
    switchCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10
    },
    button: {
        backgroundColor: '#0473ba',
        padding: 15,
        alignItems: "center",
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white'
    },
    iconsCont: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'flex-start',

    },
    cont2: {
        alignItems: 'center'
    },
    icons: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 50,
        paddingLeft: 8,
        borderColor: '#af41d7',

    },
    image: {
        height: 120,
        width: '100%',
    },
    signup: {
        color: '#0473ba',
        fontSize: 20,
        fontWeight: '700',
    },
    googleIcon: {
        width: 50,
        marginTop: -92
    },
    googleIconCont: {
        width: 50,
        alignItems: 'flex-start',
        marginTop: -192
    },
    iconInput: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        color: '#636469'
    },
    black: {
        color: 'black'
    }

});
export default Login;
export {uid}