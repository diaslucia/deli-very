import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

/* Styles */
import styles from "./styles";

/* Icons */
import IonicIcons from "react-native-vector-icons/Ionicons";

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
                </View>
                <View>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <IonicIcons name="trash-outline" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem;