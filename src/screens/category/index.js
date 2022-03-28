import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";

import { PRODUCTS } from "../../constants/products";
import CategoryProduct from "../../components/molecules/categoryProduct/index";

const Category = ({ navigation, route }) => {
    const { id } = route.params;

    const selectedCategory = PRODUCTS.filter(product => product.category === id);

    const handleSelectProduct = (product) => {
        navigation.navigate("Product", { product, name: "PRODUCTO"})
    }
    const renderItem = ({ item }) => <CategoryProduct item={item} onSelected={handleSelectProduct}/>

    return(
        <View style={styles.container}>
            <FlatList
                data={selectedCategory}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

export default Category;