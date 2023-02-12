import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from '../pages/Login4'
import React from 'react';
export default function Login5() {
    const value = React.useContext(UserContext);
    return (
        <UserContext.Consumer>
            {value => <Text>{value}</Text>}
        </UserContext.Consumer>
    )
}