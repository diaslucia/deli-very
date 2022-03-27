import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Categorías</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Producto"
                    color="#045658"
                    onPress={() => { navigation.navigate("Product", { title: "PRODUCTO" }) }}/>
            </View>
        </View>
    );
}

export default Home;