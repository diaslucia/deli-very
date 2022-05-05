import { StyleSheet } from "react-native";
import { colors, margin, fontSize } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginTop: margin.medium,
    },
    date: {
        fontSize: fontSize.text,
        color: colors.secondaryTitle,
        marginHorizontal: margin.small,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondaryTitle,
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
    total: {
        fontSize: fontSize.text,
    },
    buttonsContainerDoble: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: margin.medium,
    }
})

export default styles;