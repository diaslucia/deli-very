import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, Pressable } from "react-native";

/* Map */
import * as Location from "expo-location";

/* Components */
import MapPreview from "../mapPreview/index";

/* Icons */
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

/* Style */
import styles from "./styles";
import { colors } from "../../../constants/theme";

const LocationPicker = props => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState([]);
    const [checkMap, setCheckMap] = useState(false);

    const { onLocation } = props;

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert(
                    "Permisos insuficientes",
                    "Necesitas darle permisos de localización a la app",
                    [{ text: "Ok" }]
                );
                return;
            }
            onLocation(pickedLocation);
            })
        ();
    }, [pickedLocation]);

    const getLocationHandler = async () => {
        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            })
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
            setCheckMap(true);
            onLocation(pickedLocation);
        } catch (err) {
            Alert.alert(
                "Error",
                "Hubo un error al obtener la localización",
                [{ text: "Ok" }]);
        }
        setIsFetching(false);
    }


    const handlerPickOnMap = () => {
        props.navigation.navigate('Map', {pickedLocation});
    }

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textAddress}>Dirección</Text>
                <Pressable style={styles.button} onPress={getLocationHandler}><Ionicons name="reload-circle" size={25} color={colors.button} /></Pressable>
            </View>
            <View>
                <MapPreview style={styles.innerContainer} location={pickedLocation} onPress={handlerPickOnMap} check={checkMap}>
                    {isFetching ? 
                    (<ActivityIndicator size="large" color={colors.strongMain} />)
                    : (<Pressable style={styles.button} onPress={getLocationHandler}><AntDesign name="pluscircle" size={30} color={colors.primary} /></Pressable>
                    )}
                </MapPreview>
            </View>
        </View>
    )
}

export default LocationPicker;  