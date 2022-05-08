import React, { useState, useEffect } from "react";
import { View, Pressable, Image, Alert } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../../constants/theme";

/* Camera */
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

/* Icons */
import { AntDesign } from '@expo/vector-icons';

const ImageSelector = (props) => {
    const [pickedUrl, setPickedUrl] = useState();

    useEffect(() => {
        if(props.img) {
            setPickedUrl(props.img);
        }
    }, [props.img]);

    const verifyPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if( status !== "granted") {
            Alert.alert(
                "Permisos insuficientes",
                "Necesitas dar permisos de uso de la cámara para usar esta aplicación",
                [{ text: "Ok" }]
            );
            return false;
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if(!isCameraOk) return
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.8
        })

        setPickedUrl(image.uri)
        props.onImage(image.uri)
    }

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {   !pickedUrl
                    ?
                    (<Pressable onPress={handlerTakeImage}><AntDesign name="camera" size={30} color={colors.primary} /></Pressable>)
                    :
                    (<Pressable onPress={handlerTakeImage}><Image style={styles.image} source={{uri: pickedUrl}}/></Pressable>)
                }
            </View>
        </View>
    );
}

export default ImageSelector;