import React from "react";
import { View, Text, Button, TouchableNativeFeedback, Platform, TouchableOpacity } from "react-native";
import styles from "./styles";

const CategoryGrid = ({ item, onSelected }) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.container}>
            <TouchableComponent
                styles={{...styles.touchable, ...{backgroundColor: item.color} }}
                onPress={ () => onSelected(item)}
            >
                <Text style={styles.title}>{item.title}</Text>
            </TouchableComponent>
        </View>
    );
}

export default CategoryGrid;