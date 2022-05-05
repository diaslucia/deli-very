import React, { useState } from "react";
import { View, Text, Button } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { confirmCart } from "../../store/actions/cartAction";
import { connect, useSelector, useDispatch } from "react-redux";

/* Icons */
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* Components */
import LocationPicker from "../../components/molecules/locationPicker/index";

const Buy = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState([]);
    const total = useSelector(state => state.cart.total);
    const user = useSelector(state => state.auth.userId);

    const handleConfirmCart = () => {
        const items = route.params;
        dispatch(confirmCart(items, total, user, location));
        navigation.navigate("Thanks");
    }

    const handleOnLocation = location => {
        setLocation(location);
    };

    return(
        <View style={styles.container}>

            <View>
                <View style={styles.containerTotal}>
                    <Text style={styles.total}>TOTAL</Text>
                    <Text style={styles.total}>${total}</Text>
                </View>
                <View style={styles.detalles}>
                    <Text style={styles.title}>Detalles de entrega</Text>
                </View>
                <View style={styles.address}>
                    <LocationPicker navigation={navigation} onLocation={handleOnLocation}/>
                </View>
                <View style={styles.payment}>
                    <Text style={styles.paymentText}>Número de teléfono</Text>
                    <MaterialCommunityIcons name="pencil" size={24} color={colors.button} />
                </View>
                <View style={styles.payment}>
                    <Text style={styles.paymentText}>Forma de pago</Text>
                    <MaterialCommunityIcons name="pencil" size={24} color={colors.button} />
                </View>
            </View>

            <View style={styles.footer}>
                <Button title="Enviar Pedido" onPress={() => handleConfirmCart()} color={colors.button}/>
            </View>
            
        </View>
    );
}

export default connect()(Buy);


