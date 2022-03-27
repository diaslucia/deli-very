import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        color: colors.primaryTitle,
        fontFamily: fontFamily.main,
        fontSize: fontSize.large,
        marginVertical: margin.large,
        textTransform: "uppercase",
        textAlign: "center",
    }
});

export default styles;