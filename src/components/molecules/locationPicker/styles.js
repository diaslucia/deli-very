
import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { colors, fontSize, margin, fontFamily, padding } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.accent,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: colors.primaryBackground,
        padding: padding.medium,
        borderBottomWidth: 1,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: margin.small,
    },
    textAddress: {
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        color: colors.primaryText,
    },
    innerContainer: {
        width: "100%",
        height: 150,
        borderColor: colors.button,
        borderRadius: 10,
        borderWidth: 1,
    },
    text: {
        color: colors.strongSecondary,
        fontSize: fontSize.text,
    },
});

export default styles;