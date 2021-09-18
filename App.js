import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={Signup} />
                <Stack.Screen
                    name="carbonOff"
                    component={Main}
                    options={({ navigation }) => ({
                        headerLeft: null,
                        headerRight: () => (
                            // TODO: Move this to the profile page
                            <Button title="Sign Out" onPress={() => navigation.goBack()} />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
