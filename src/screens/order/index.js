import React, { useEffect } from "react";
import { View, FlatList } from "react-native";

/* Styles */
import styles from "./styles";

/* Redux */
import { useDispatch, connect, useSelector } from "react-redux";
import { getOrders, removeOrder } from "../../store/actions/orderAction";

/* Components */
import OrderItem from "../../components/molecules/orderItem/index";

const Order = ({ navigation }) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const orders = useSelector(state => state.order.orders);

    useEffect(() => {
        dispatch(getOrders(userId));
    }, []);

    const onDelete = (id) => {
        dispatch(removeOrder(id));
    }

    const onDetails = (id) => {
        console.log(id);
    }

    const renderItem = ({ item }) => (
        <OrderItem
            data={item}
            onDelete={onDelete}
            onDetails={onDetails}
        />
    )

    return(
        <View style={styles.container}>
            <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
            />
        </View>
    );
}

export default connect()(Order);