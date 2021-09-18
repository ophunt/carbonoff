import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import Footprint from "./Footprint";
import Home from "./Home";
import Profile from "./Profile";
import Resources from "./Resources";
import Tips from "./Tips";

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Footprint" component={Footprint} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Tips" component={Tips} />
            <Tab.Screen name="Resources" component={Resources} />
        </Tab.Navigator>
    );
}
