import { useEffect, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import firestore from '@react-native-firebase/firestore';
import { uid } from "./Login";
import FlatlistFunc from "./Flatlist";
export default function Todo() {
    const [input, setinput] = useState('')
    let send = () => {
        firestore()
            .collection('Users')
            .add({
                todo: input
            })
            .then(() => {
                console.log('User added!');
            });
    }
   
    return (
        <View>
            <View style={styles.input}>
                <TextInput style={styles.textInput} onChangeText={e => setinput(e)} />
                <Icon name="send" size={25} style={styles.iconInput} onPress={() => send()} />
            </View>
            <FlatlistFunc />
        </View>

    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        color: 'black',
        paddingHorizontal: 20
    }, iconInput: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        color: '#636469'
    }, input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        borderColor: '#0473ba',
        marginTop: 50
    },
});
