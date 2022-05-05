import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, margin, padding } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        fontSize: fontSize.title,
        color: colors.secondaryTitle,
        textTransform: "uppercase",
        textAlign: "center",
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginVertical: margin.large,
        padding: padding.small,
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