import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, margin } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDisabled: {
        flex: 1,
        opacity: 0.5,
    },
    input : {
        borderBottomWidth: 1,
        fontFamily: fontFamily.main,
        color: colors.button,
        borderBottomColor: colors.button,
        paddingVertical: margin.small,
        marginVertical: margin.small
    },
    messageText: {
        color: colors.error,
        fontSize: fontSize.error,
        fontFamily: fontFamily.main,
        marginVertical: margin.small,
    }
});

export default styles;