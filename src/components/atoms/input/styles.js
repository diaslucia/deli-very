import { StyleSheet } from 'react-native';

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
        borderBottomColor: "red",
        paddingVertical: 10,
    },
    messageText: {
        color: "red",
        fontSize: 12,
        marginVertical: 5,
    }
});

export default styles;