import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily, fontSize, margin } from "../../../constants/theme";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: margin.small,
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        height: height / 4,
       
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    blackImg: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        height: height / 4,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    title: {
        color: colors.secondaryText,
        fontFamily: fontFamily.main,
        fontSize: fontSize.title,
        marginVertical: margin.large,
        textTransform: "uppercase",
        textAlign: "center",
    }
});

export default styles;