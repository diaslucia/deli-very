import React from "react";
import { View, Text, TouchableNativeFeedback, Platform, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const CategoryProduct = ({ item, onSelected }) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.container}>
            <TouchableComponent onPress={() => onSelected(item)}>
                <View style={styles.containerAll}>
                    <View style={styles.containerImg}> 
                        <Image style={styles.image} source={{ uri: item.img }}/>
                    </View>
                    <View style={styles.containerName}> 
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View style={styles.containerPrice}>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    );
}

export default CategoryProduct;