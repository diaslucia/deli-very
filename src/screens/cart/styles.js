import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    list: {
        flex: 1,  
    },
    footer: {
        flex: 1,
        flexGrow: 0.1,
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        marginHorizontal: 20,
    },
    total: {
        fontSize: 18,
        padding: 8,
        color: '#212121'
    },
    totalPrice: {
        fontSize: 16,
        padding: 8,
        color: colors.primary,
    },
});

export default styles;