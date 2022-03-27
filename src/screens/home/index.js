import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ir a categorías"
                    color="#045658"
                    onPress={() => { navigation.navigate("Category", { title: "CATEGORÍAS" }) }}/>
            </View>
        </View>
    );
}

export default Home;