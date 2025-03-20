import { StyleSheet } from "react-native";

export const style = StyleSheet.create (
    {
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5'
        },

        imageContainer: {
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: 200,
            height: 200,
            marginBottom: 20
        },

        header: {
            backgroundColor: '#114EA2',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
        },

        headerTitle: {
            flex: 1,
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
        },

        spacer: {
            width: 24, // Matches the icon size for balance
        },

        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },

        welcomeText: {
            fontSize: 18,
            color: '#333',
            textAlign: 'center',
        }
    }
)