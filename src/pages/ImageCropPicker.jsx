import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet,Image, View} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import { log } from "react-native-reanimated";
import google from '../images/google.png'

export default function ImageCropPicker() {
    const [image2,setimage] = useState(google)
    const openGallery =()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
          
    }
 
    const openCameraFunc =()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
          
    }


  
  
    return (
        <View style={styles.container}>

        <TouchableOpacity  onPress={() => openGallery()}>
            <Text style={styles.button}>Open</Text>

        </TouchableOpacity >
        <TouchableOpacity  onPress={() => openCameraFunc()}>
            <Text style={styles.button}>Open Camera</Text>

        </TouchableOpacity >
        <Image source={google} style={styles.googleIcon} resizeMode='contain' onPress={() => alert('Google Login/Signup Will Be Available Soon')}></Image>

        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bed',
        color: 'white',
        width: "30%",
        padding: 15,
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 25
    },
    container: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
    }
});