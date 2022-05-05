import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily, fontSize, margin, padding } from "../../constants/theme";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },
    img: {
        width: width,
        height: height /4,
    },
    containerText: {
        marginHorizontal: margin.medium,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: colors.primaryTitle,
        fontFamily: fontFamily.main,
        fontSize: fontSize.title,
        marginTop: margin.large,
        textTransform: "uppercase",
    },
    price: {
        color: colors.primaryText,
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        marginBottom: margin.small,
        marginTop: margin.large,
    },
    containerDescription: {
        marginHorizontal: margin.medium,
    },
    text: {
        color: colors.primaryText,
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        marginVertical: margin.small,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: margin.large,
        paddingVertical: padding.small,
        elevation: 2,
        backgroundColor: colors.button,
    },
    textButton:{
        color: colors.secondaryText,
        textTransform: "uppercase",
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
    }
});

export default styles;