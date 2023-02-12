import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';

import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView
} from 'react-native';
import { block } from 'react-native-reanimated';

const FlatlistFunc = () => {
    const [data, setdata] = useState([])
    const [dataFunc, setDataFunc] = useState('')
    const [list, setlist] = useState('')
    useEffect(() => {
        firestore().collection('Users').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let documnet = doc.data()
                    setdata(data.push(documnet))
                    setlist(data.map((item, index) => {

                        return (
                            <View style={styles.item} key={index}>
                                <Text style={styles.title} key={index}>{item.todo}</Text>
                                <Icon name="edit" size={30} style={styles.icon}  />
                                <Icon name="delete" size={30}  style={styles.icon}  />

                            </View>
                        )

                    }))
                })
            })
    }, [])
    return (
        <ScrollView>
            {list}
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
    },
    title: {
        fontSize: 32,
    },
    icon:{
        marginLeft:'auto',
        marginTop:10,
        // paddingRight:5
    }
});

export default FlatlistFunc;