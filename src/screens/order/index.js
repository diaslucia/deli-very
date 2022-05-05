import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";

/* Styles */
import styles from "./styles";

/* Redux */
import { useDispatch, connect, useSelector } from "react-redux";
import { getOrders, removeOrder } from "../../store/actions/orderAction";

/* Components */
import OrderItem from "../../components/molecules/orderItem/index";
import ImageSelector from "../../components/molecules/imageSelector/index";

const Order = ({ navigation }) => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState();
    const userId = useSelector(state => state.auth.userId);
    const user = useSelector(state => state.auth);
    const orders = useSelector(state => state.order.orders);
    const address = orders[0].address;

    console.warn(user);
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
        />
    )

    const onHandlerImageTaken = path => {
        setSelectedImage(path);
    }

    return(
        <View style={styles.container}>
            <ImageSelector onImage={onHandlerImageTaken} address={address}/>
            <View style={styles.orderContainer}>
                <Text style={styles.title}>Mis órdenes</Text>
            </View>
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