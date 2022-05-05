import { StyleSheet } from "react-native";
import { colors, fontSize, padding, margin } from "../../../constants//theme";

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: padding.large,
        backgroundColor: colors.primaryBackground,
    },
    containerImg:{
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-end",
        marginHorizontal: margin.medium,
    },
    preview: {
      width: 150,
      height: 150,
      justifyContent: "center",
      alignItems: 'center',
      borderColor: colors.button,
      borderWidth: 1,
      borderRadius: 100,
    },
    image: {
      width: 150,
      height: 150,
      justifyContent: "center",
      alignItems: 'center',
      borderColor: colors.button,
      borderWidth: 1,
      borderRadius: 100,
    },
    text: {
      color: colors.strongSecondary,
      fontSize: fontSize.text,
    },
    containerText:{
        marginHorizontal: margin.small,
    }
})

export default styles;