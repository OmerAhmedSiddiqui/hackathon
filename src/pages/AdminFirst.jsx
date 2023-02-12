import { Text, View,Image,StyleSheet } from "react-native";
import React from 'react';
import logo from '../images/logo.png'
import cart from '../images/Cart.png'
import grocery from '../images/Grocery.png'

export default function AdminFirst() {
    return (
        <View style={styles.firstContainer}>

<View >
        <Image source={logo} style={styles.logo}  resizeMode='contain'></Image>
    <Text style={styles.discountStore}>DISCOUNT STORE</Text>
</View>
<View>
    <Image source={cart} style={styles.cart}  resizeMode='contain'></Image>
</View>
<Image source={grocery} style={styles.image}   resizeMode='contain'></Image>

        </View>
        )

}

const styles = StyleSheet.create({
//  firstContainer:{
// flexDirection:'column',

//  },
logo:{
    width:'50%'
},
discountStore:{
    
    // font-style: normal;
    // font-weight: 600;
    // font-size: 12px;
    // line-height: 25px;
    
    
    color: '#024F9D'
},
// cart:{display:'inline'},
image:{
    width:'100%'
}
});