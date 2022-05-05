import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    orderContainer: {
        backgroundColor: colors.accent,
    },
    title: {
        backgroundColor: colors.accent,
        fontSize: fontSize.title,
        color: colors.secondaryTitle,
        marginHorizontal: margin.small,
        textTransform: "uppercase",
    },
});

export default styles;