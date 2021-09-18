import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, SafeAreaView, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import styles from "./Login.style.js";
import requests from "../../requests";

export default function Login({ navigation }) {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const doLogin = async () => {
        if (identifier === "") {
            Alert.alert("Please enter a username/email to login");
            return;
        }
        if (password === "") {
            Alert.alert("Please enter a password to login");
            return;
        }
        setLoading(true);
        requests
            .login(identifier, password)
            .then((response) => {
                setPassword("");
                setIdentifier("");
                const userIsAuthenticated = response.data.verified_user_status;
                setLoading(false);
                if (userIsAuthenticated) {
                    navigation.navigate("Main");
                } else {
                    navigation.navigate("Main");
                }
            })
            .catch((err) => {
                setPassword("");
                setLoading(false);
                console.log(err.message);
                Alert.alert(err.response.data.response ?? "Uh oh! Something went wrong! Try again later!");
            });
    };

    return (
        <SafeAreaView style={styles.login}>
            <KeyboardAvoidingView style={{ alignItems: "center" }}>
                <Image style={styles.logo} source={require("../../assets/carbonoff.png")} />
                <View style={{ width: "80%", marginTop: 50 }}>
                    <Input
                        autoCapitalize="none"
                        value={identifier}
                        onChangeText={(text) => setIdentifier(text)}
                        style={styles.input}
                        inputStyle={{ color: "white" }}
                        placeholder="Username/Email"
                        leftIcon={<Icon name="user" size={24} color="black" />}
                    />
                    <Input
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        inputStyle={{ color: "white" }}
                        secureTextEntry={true}
                        placeholder="Password"
                        leftIcon={<Icon name="lock" size={24} color="black" />}
                    />
                    {!loading ? (
                        <Button onPress={doLogin} buttonStyle={styles.loginButton} title="LOG IN" />
                    ) : (
                        <Button buttonStyle={styles.loginButton} title="Loading button" loading />
                    )}
                </View>
                {/* <Button type="clear" title="Sign Up" onPress={() => navigation.navigate("Sign Up")} /> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
