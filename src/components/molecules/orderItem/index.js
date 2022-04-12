import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import IonicIcons from "react-native-vector-icons/Ionicons";

const OrderItem = ({ data, onDelete, onDetails }) => {
    const { date, id, total } = data;

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
            <Text style={styles.total}>total: $ {total}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => onDetails(id)}>
                    <IonicIcons name="list-outline" size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <IonicIcons name="trash-outline" size={20} />
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default OrderItem;