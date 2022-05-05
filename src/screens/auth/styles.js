import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontFamily, fontSize, margin, padding } from "../../constants/theme";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.primaryBackground,
        padding: padding.large,
        justifyContent: "space-evenly",
        height: height / 2 + 80,
        width: width - 50,
        borderRadius: 10,
        elevation: 2,
    },
    formTitle: {
        fontFamily: fontFamily.main,
        fontSize: fontSize.title,
        color: colors.thirdTitle,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },
    linkText: {
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        color: colors.accent,
        fontWeight: "bold",
        textAlign: 'center',
    },
    buttonContainer: {
        paddingVertical: padding.large,
    },
    image: {
        flex: 1,
        resizeMode: "repeat",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;