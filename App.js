import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View, Button } from "react-native";
import Login from "./src/Login/Login";
import Main from "./src/Main/Main";
import Signup from "./src/Signup/Signup";
import * as colors from "./colors.json";

const Stack = createStackNavigator();
const headerStyle = {
    backgroundColor: colors["light-green"],
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerStyle }} />
                <Stack.Screen name="Sign Up" component={Signup} options={{ headerStyle }} />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={({ navigation }) => ({
                        title: "carbonOff",
                        headerStyle,
                        headerLeft: null,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
