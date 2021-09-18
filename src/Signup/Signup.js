import React, { useState } from "react";
import { View, Image,SafeAreaView, KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import globalStyle from "../global.style.js";
import styles from "./Signup.style.js";
import { ScrollView } from "react-native-gesture-handler";

export default function Signup({ navigation }) {
    const doSignup = () => {}
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles.signup}>
                <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/carbonoff.png')}
                />
                <View style={{width: "80%", marginTop: 10}}>
                    <Input
                        value={firstname}
                        onChangeText={(text) => setFirstname(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='First Name'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        value={lastname}
                        onChangeText={(text) => setLastname(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='Last Name'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='transparent'
                            />
                        }
                    />
                    <Input
                        autoCapitalize="none"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='Username'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='transparent'
                            />
                        }
                    />
                    <Input
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='envelope'
                                size={20}
                                color='black'
                            />
                        }
                    />
                    <Input
                        value={city}
                        onChangeText={(text) => setCity(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='City'
                        leftIcon={
                            <Icon
                                name='globe'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        value={state}
                        onChangeText={(text) => setState(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='State'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='transparent'
                            />
                        }
                    />
                    <Input
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        placeholder='Country'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='transparent'
                            />
                        }
                    />
                    <Input
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        secureTextEntry={true} 
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        value={confPassword}
                        onChangeText={(text) => setConfPassword(text)}
                        style={styles.input}
                        inputStyle={{color: "white"}}
                        secureTextEntry={true} 
                        placeholder='Confirm Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='transparent'
                            />
                        }
                    />
                    {!loading ? <Button
                        onPress={doSignup}
                        buttonStyle={styles.signupButton}
                        title="SIGN UP"
                    /> : <Button
                        buttonStyle={styles.signupButton}
                        title="Loading button"
                        loading
                    />}
                </View>
                <View style={globalStyle.flexRow}>
                    <Text style={{color: "#CECECE", fontSize: 15, marginTop: 10 }}>Already have an account?</Text>
                    <Button titleStyle={{fontSize: 15.5}} type="clear" title="Log In" onPress={() => navigation.navigate("Login")} />
                </View>
            </ScrollView>
                </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

/**
 * Sign up notes:
 *  - Usernames can only be in [a-zA-Z0-9_] (letters, numbers, underscores)
 *  - Emails are verified before they are able to sign in
 */
