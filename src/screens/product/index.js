import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./styles";
import { useSelector, connect } from "react-redux";

import { colors } from "../../constants/theme";

const Product = ({ route }) => {
    const product = useSelector(state => state.products.selectedProduct);

    const { name, description, price, img } = product;

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={{ uri: img }}/>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>{name}</Text>
                
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.text}>{description}</Text>
            </View>
            <View style={styles.containerButton}>
                <Button title="Comprar" onPress={() => null} color={colors.button}/>
            </View>
        </View>
    )
}

export default Product;