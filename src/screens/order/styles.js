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
    profileContainer: {
        backgroundColor: colors.primaryBackground,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    },
    profileTitle:{
        textAlign: "center",
        fontFamily: fontFamily.main,
        fontSize: fontSize.text,
        color: colors.secondaryTitle,
        marginTop: margin.small,
        textTransform: "uppercase",
    },
    profileText: {
        textAlign: "center",
        fontFamily: fontFamily.main,
        color: colors.primaryText,
        marginBottom: margin.small,
    },
    profileInnerContainer: {
        marginHorizontal: margin.large,
        marginVertical: margin.small,
    }
});

export default styles;