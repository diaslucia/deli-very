import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, margin, padding } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: margin.medium,
    },
    list: {
        flex: 1,  
    },
    footer: {
        flex: 1,
        flexGrow: 0.1,
        borderTopColor: colors.third,
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: margin.medium,
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
});

export default styles;