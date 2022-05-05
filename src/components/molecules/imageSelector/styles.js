import { StyleSheet } from "react-native";
import { colors, fontSize, padding, margin } from "../../../constants//theme";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingVertical: padding.large,
        backgroundColor: colors.primaryBackground,
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
})

export default styles;