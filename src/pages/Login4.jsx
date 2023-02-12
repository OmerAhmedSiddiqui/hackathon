import { createContext } from "react";
import { Text } from "react-native";
import React from 'react';
export const UserContext = React.createContext();
export default function Login4() {
    return (
        <UserContext.Provider value="Reed">
            <Text>Hello World</Text>
        </UserContext.Provider>
    )
}