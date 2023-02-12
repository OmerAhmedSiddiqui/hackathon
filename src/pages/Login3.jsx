import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet,Image} from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function Login3() {
    const [imageUri,setImageUri] = useState('')
    const openCamera = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
                saveToPhotos : true
            },
            includeBase64: true
        }
        launchCamera(options, response => {
            console.log('Response', response.assets[0].uri);
            if (response.didCancel) {
                alert('User Cancel The Image');
            }
            else if (response.error) {
                alert('Image Picker Error', response.error);
            }
            else if (response.customButton) {
                alert('User Tapped Custom Button', response.customButton);
            }
            else{
                const source = {uri : 'data:image/jpeg;bas64, ' + response.base64}
                setImageUri(source)
                console.log('source',response.assets[0].uri);
            }
        });

    }
    return (
        <TouchableOpacity style={styles.container} onPress={() =>
            openCamera()
        }>
            <Text style={styles.button}>Upload</Text>
            <Image source={imageUri} style={{borderWidth:2,width:200,height:200,borderColor:'black',marginTop:50}}/>

        </TouchableOpacity >
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