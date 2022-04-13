import { StyleSheet } from "react-native";
import { colors, margin, fontSize } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: colors.accent,
        marginTop: margin.medium,
    },
    name: {
        fontSize: fontSize.title,
        color: colors.secondaryTitle,
        marginHorizontal: margin.small,
    },
    details: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: margin.small,
        marginTop: margin.small,
    },
    quantity: {
        fontSize: fontSize.text,
    },
    price: {
        fontSize: fontSize.text,
        color: colors.primaryText,
    },
});

export default styles;