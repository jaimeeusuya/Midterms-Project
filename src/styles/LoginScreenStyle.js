import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: "#F0FFFF"
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: 250,
        height: 250,
        marginBottom: 5,
        marginTop: 90
    },

    appTitle: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#114EA2",
        marginBottom: 10
    },

    descriptionText1: {
        fontSize: 20,
    },

    descriptionText2: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#114EA2"
    },

    TextInput: {
        width: 250,
        borderWidth: 3,
        borderColor: "#114EA2",
        borderRadius: 10,
        color: "black",
        backgroundColor: "white",
        fontWeight: "bold",
        paddingStart: 10,
        paddingEnd: 10,
        fontSize: 20
        
    },

    passwordInput: {
        width: 250,
        borderWidth: 3,
        borderColor: "#114EA2",
        borderRadius: 10,
        marginTop: 10,
        color: "black",
        backgroundColor: "white",
        fontWeight: "bold",
        paddingStart: 10,
        paddingEnd: 10,
        fontSize: 20
    },

    buttonsContainer: {
        flexDirection: "column", 
        justifyContent: "space-between",
        gap: 10,
        marginBottom: 100,
    },

    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 5,
        padding: 5,
    },

    inputError: {
        borderColor: 'red',
        borderWidth: 3
    }


});