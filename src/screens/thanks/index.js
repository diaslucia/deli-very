import React from "react";
import { View, Text, Pressable } from "react-native";

/* Styles */
import styles from "./styles";

/* Redux */
import { connect } from "react-redux";

const Thanks = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>¡Tu pedido está en camino!</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}><Text style={styles.textButton}>Volver al Inicio</Text></Pressable>
            </View>
        </View>
    );
}

export default connect()(Thanks);