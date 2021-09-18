import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View, Button } from "react-native";
import Login from "./src/Login/Login";
import Main from "./src/Main/Main";
import Signup from "./src/Signup/Signup";
import * as colors from "./colors.json";
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';



const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Sign Up" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={({ navigation }) => ({
                        title: "carbonOff",
                        headerStyle: {
                            backgroundColor: "black",
                        },
                        headerTitleStyle: {
                            color: colors["light-grey"],
                        },
                        headerLeft: null,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => App);
