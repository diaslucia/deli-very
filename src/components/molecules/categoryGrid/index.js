import React from "react";
import { View, Text, TouchableNativeFeedback, Platform, TouchableOpacity, ImageBackground  } from "react-native";

/* Styles */
import styles from "./styles";

const CategoryGrid = ({ item, onSelected }) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.container}>
            <TouchableComponent onPress={() => onSelected(item)}>
                <View style={styles.containerText}>
                    <ImageBackground source={{ uri: item.img }} resizeMode="cover" style={styles.image}>
                        <View style={styles.blackImg}>
                            <Text style={styles.title}>{item.name}</Text> 
                        </View>
                    </ImageBackground>
                </View>
            </TouchableComponent>
        </View>
    );
}

export default CategoryGrid;