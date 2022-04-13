import React from "react";
import { View, Text, FlatList, Button } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { connect, useSelector, useDispatch } from "react-redux";
import { confirmCart, removeItem } from "../../store/actions/cartAction";

/* Components */
import CartItem from "../../components/molecules/cartItem/index";

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    const user = useSelector(state => state.auth.userId);

    const handleDeleteItem = id => dispatch(removeItem(id));

    const handleConfirmCart = () => {
        dispatch(confirmCart(items, total, user));
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem}/>
    
    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.total}>Total: ${total}</Text>
                <Button title="Confirmar" onPress={() => handleConfirmCart()} color={colors.button}/>
            </View>
        </View>
    );
}

export default connect()(Cart);


