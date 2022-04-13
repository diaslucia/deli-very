import React from "react";
import { FlatList, View } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { useSelector, connect, useDispatch } from "react-redux";
import { selectedCategory } from "../../store/actions/categoryAction";

/* Components */
import CategoryGrid from "../../components/molecules/categoryGrid/index";

import IonicIcons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    
    const handleSelectCategory = (category) => {
        dispatch(selectedCategory(category.id));
        navigation.navigate("Category", { name: "CATEGORÍA" })
    }

    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <IonicIcons name='person-circle-outline' size={35} color={colors.secondary} onPress={() => navigation.navigate("Order")}/>
          ),
        });
    }, [navigation]);

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