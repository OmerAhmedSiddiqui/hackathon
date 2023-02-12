import { useState } from "react";
import { Text,Button, View,Image } from "react-native";
import { launchImageLibrary} from 'react-native-image-picker';
import google from '../images/google.png'

export default function ImagePicker() {
    const [image,setimage] = useState(google)
    const opengallery = ()=>{
        const options = {
            mediaType:'photo'
    
        }
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
        setimage(response)
        })
    }
 
    return (
        <View>
            
    <Button title="open gallery" onPress={()=>opengallery()}></Button>
    <Image source={image}  resizeMode='contain' onPress={() => alert('Google Login/Signup Will Be Available Soon')}></Image>

        </View>
    )
}