import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import globalStyles from "../global.style.js";
import { ListItem, Avatar } from 'react-native-elements'
import styles from "./Home.style.js";

const list = [
    {
        name: 'Amy Farha',
    },
    {
        name: 'Chris Jackson',
    },
    {
        name: 'Grace Vinson',
    },
    {
        name: 'Jared Pennington',
    },
    {
        name: 'Daisy-Mae Velasquez',
    },
    {
        name: 'Nabilah Cardenas',
    },
    {
        name: 'Inara Redfern',
    },
    {
        name: 'Saqlain Olsen',
    },
    {
        name: 'Olly Herrera',
    },
    {
        name: 'Josiah Odling',
    },
    {
        name: 'Caris Norris',
    },
    {
        name: 'Karis Palacios',
    },
    {
        name: 'Will Whitley',
    },
];
  

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={[globalStyles.growContainer, {alignItems: "left", justifyContent: "start"}]}>
            <ScrollView style={{width: "100%"}}>
                <Text style={{color: "white", fontSize: 35, fontWeight: "700", margin: 25}}>Leaderboard</Text>
                <View style={{marginLeft: 25}}>
                {
                    list.map((l, i) => (
                        <View key={l.name} style={[globalStyles.flexRow, {alignItems: "center", marginBottom: 10}]}>
                            <Text style={{color: "white", fontSize: 23, fontWeight: "600", marginRight: 10 }}>{i+1}.</Text>
                            <Avatar rounded size="medium" source={{uri: "https://picsum.photos/200"}} />
                            <Text style={{fontSize: 20, color: "white", marginLeft: 10}}>{l.name}</Text>
                        </View>
                    ))
                }
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}
