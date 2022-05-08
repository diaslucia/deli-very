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

/* Storage Async */
import AsyncStorage from '@react-native-async-storage/async-storage';

const Order = ({ navigation }) => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState();
    const [ direction, setDirection ] = useState("");
    const userId = useSelector(state => state.auth.userId);
    const orders = useSelector(state => state.order.orders);

    useEffect(() => {
        dispatch(getOrders(userId));
        getData();
        checkOrder();
    }, [direction]);

    const checkOrder = async () => {
        if(orders.length != 0){
            setDirection(orders[0].address);
        }
    }

    const onDelete = (id) => {
        dispatch(removeOrder(id));
    }

    const renderItem = ({ item }) => (
        <OrderItem
            data={item}
            onDelete={onDelete}
        />
    )

    const onHandlerImageTaken = path => {
        setSelectedImage(path);
        storeData(path)
    }

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          console.warn(e);
        }
      }

    
    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
            setSelectedImage(value);
        }
        } catch(e) {
         console.warn(e)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <ImageSelector onImage={onHandlerImageTaken} address={orders} img={selectedImage}/>
                <View style={styles.profileInnerContainer}>
                    <Text style={styles.profileTitle}>Id de Usuario:</Text>
                    <Text style={styles.profileText}>{userId}</Text>
                    <Text style={styles.profileTitle}>Tu dirección:</Text>
                    <Text style={styles.profileText}>{direction}</Text>
                </View>
            </View>
           
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