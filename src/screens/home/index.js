import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

import { useSelector, connect, useDispatch } from "react-redux";
import { selectedCategory } from "../../store/actions/categoryAction";

import CategoryGrid from "../../components/molecules/categoryGrid/index";

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    
    const handleSelectCategory = (category) => {
        dispatch(selectedCategory(category.id));
        navigation.navigate("Category", { name: "CATEGORÍA" })
    }

    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>

    return(
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

export default connect()(Home);