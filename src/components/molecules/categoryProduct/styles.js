import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily, fontSize, margin, padding } from "../../../constants/theme";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: margin.small,
        backgroundColor: "#f7f7f7",
        elevation: 2,
    },
    containerAll: {
        flex: 1,
        paddingVertical: padding.small,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    containerImg: {
        justifyContent: "center",
        alignContent: "center",
    },
    image: {
        width: width /8,
        height: width /8,
    },
    containerName: {
        justifyContent: "center",
        alignContent: "center",
        width: width /3,
    },
    title: {
        color: colors.primaryText,
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        alignContent: "flex-start",
    },
    containerPrice: {
        justifyContent: "center",
        alignContent: "center",
    },
    price: {
        color: colors.primaryText,
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        alignContent: "flex-end",
    },
});

export default styles;