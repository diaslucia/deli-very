import React from "react";
import styles from "./styles";
import { View, Text, Flatlist, Button } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import { confirmCart, removeItem } from "../../store/actions/cartAction";

import CartItem from "../../components/molecules/cartItem/index";

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleDeleteItem = id => dispatch(removeItem(id));

    const handleConfirmCart = () => {
        dispatch(confirmCart(items, total));
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem}/>
    
    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <Flatlist
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <Button title="Confirmar" onPress={() => handleConfirmCart()} color="red"/>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalPrice}>${total}</Text>
            </View>
        </View>
    );
}

export default connect()(Cart);


