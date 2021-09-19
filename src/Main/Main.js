import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import Footprint from "../Footprint/Footprint";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Resources from "../Resources/Resources";
import Tips from "../Tips/Tips";
import globalStyles from "../global.style.js";
import styles from "./Main.style.js";
import colors from "../../colors.json";

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
    const signOut = () => {
        navigation.goBack();
    };

    const getIconFromRoute = ({ route }) => {
        return ({ focused, color, size }) => {
            const iconName = icons[route.name] ? icons[route.name] : "help-box";
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        };
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: getIconFromRoute({ route }),
                tabBarActiveTintColor: colors.red,
                tabBarStyle: {
                    backgroundColor: "black",
                },
            })}
        >
            <Tab.Screen name="Footprint" component={Footprint} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile">{(props) => <Profile {...props} signOut={signOut} />}</Tab.Screen>
            {/* <Tab.Screen name="Tips" component={Tips} />
            <Tab.Screen name="Resources" component={Resources} /> */}
        </Tab.Navigator>
    );
}

const icons = {
    Profile: "account",
    Footprint: "foot-print",
    Home: "home",
    Tips: "lightbulb-on",
    Resources: "bookshelf",
};
