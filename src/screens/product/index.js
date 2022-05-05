import React from "react";
import { View, Text, Image, Pressable } from "react-native";

/* Styles */
import styles from "./styles";

/* Redux */
import { useSelector, connect, useDispatch } from "react-redux";
import { addItem } from "../../store/actions/cartAction";

const Product = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);
    const { name, description, price, img } = product;

    const handleAddToCart = () => dispatch(addItem(product));

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
            <View>
                <Pressable style={styles.button} onPress={() => handleAddToCart()}><Text style={styles.textButton}>Comprar</Text></Pressable>
            </View>
        </View>
    )
}

export default connect()(Product);