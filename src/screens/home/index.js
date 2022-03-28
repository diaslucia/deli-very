import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

import { CATEGORIES } from "../../constants/categories";
import CategoryGrid from "../../components/molecules/categoryGrid/index";

const Home = ({ navigation }) => {

    const handleSelectCategory = (category) => {
        navigation.navigate("Category", { id: category.id, name: "CATEGORÍA"})
    }

    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>

    return(
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

export default Home;