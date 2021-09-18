import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "./src/Login/Login";
import Main from "./src/Main/Main";
import Signup from "./src/Signup/Signup";
import colors from "./colors.json";

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
