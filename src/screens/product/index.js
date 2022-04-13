import React from "react";
import { View, Text, Button, Image } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

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
            <View style={styles.containerButton}>
                <Button title="Comprar" onPress={() => handleAddToCart()} color={colors.button}/>
            </View>
        </View>
    )
}

export default connect()(Product);