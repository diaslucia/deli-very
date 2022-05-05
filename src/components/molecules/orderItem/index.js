import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

/* Styles */
import styles from "./styles";

/* Icons */
import IonicIcons from "react-native-vector-icons/Ionicons";

const OrderItem = ({ data, onDelete }) => {
    const { date, id, total, address } = data;

    const formatDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>{formatDate(date)}</Text>
            </View>
            <View style={styles.details}>
                <Text>{address}</Text>
                <Text style={styles.total}>Total: ${total}</Text>

                <View style={styles.buttonsContainerDoble}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={() => onDelete(id)}>
                            <IonicIcons name="trash-outline" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default OrderItem;