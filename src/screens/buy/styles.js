import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, margin, padding } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: margin.medium,
        justifyContent: "space-between",
    },
    containerTotal: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.accent,
        borderBottomWidth: 1,
    },
    total: {
        color: colors.primaryText,
        fontFamily: fontFamily.primary,
        fontSize: fontSize.text,
        marginTop: margin.large,
        marginBottom: margin.small,
        fontWeight: "bold",
    },
    detalles: {
        marginTop: margin.large,
        backgroundColor: colors.accent,
        marginTop: margin.medium,
    },
    title: {
        fontFamily: fontFamily.primary,
        fontSize: fontSize.title,
        textTransform: "uppercase",
        color: colors.secondaryTitle,
        textAlign: "center",
        paddingVertical: padding.small,
    },
    footer: {
        marginVertical: margin.medium,
    },
    total: {
        fontSize: fontSize.text,
        padding: padding.small,
        color: colors.primaryText,
    },
    totalPrice: {
        fontSize: fontSize.text,
        padding: padding.small,
        color: colors.primaryText,
    },
    payment: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: colors.primaryBackground,
        padding: padding.medium,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: colors.accent,
    },
    paymentText: {
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        color: colors.primaryText,
    }
});

export default styles;