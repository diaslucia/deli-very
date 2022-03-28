import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Product = ({ navigation, route }) => {
    const { product } = route.params;
    const { name, description, price, weight } = product;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>price: ${price}</Text>
            <Text style={styles.text}>weight: {weight}</Text>
            <Button title="Order now" onPress={() => null} color="red"/>
        </View>
    )
}

export default Product;