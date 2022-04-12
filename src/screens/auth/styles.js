import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "orange",
    },
    containerCard: {
        height: height / 2,
        width: width * 0.7,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formContainer: {
        flex: 1,
    },
    label: {
        fontSize: 13,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    linkText: {
        color: "orange",
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    }
});

export default styles;