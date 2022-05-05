import React, { useState } from "react";
import { View, Pressable, Image, Text, Alert } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../../constants/theme";

/* Camera */
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

/* Icons */
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ImageSelector = (props) => {
    const [pickedUrl, setPickedUrl] = useState();

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
            <View style={styles.containerImg}>
                <View style={styles.preview}>
                    {   !pickedUrl
                        ?
                        (<Pressable onPress={handlerTakeImage}><AntDesign name="camera" size={30} color={colors.primary} /></Pressable>)
                        :
                        (<Image
                        style={styles.image}
                        source={{uri: pickedUrl}} 
                        />)
                    }
                </View>
                <View>
                    <Pressable onPress={handlerTakeImage}><MaterialCommunityIcons name="pencil" size={24} color={colors.button} /></Pressable>  
                </View>
            </View>
            <View style={styles.containerText}>
                <Text>Nombre</Text>
                <Text>Email</Text>
            </View>
            
        </View>
    );
}

export default ImageSelector;