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
            padding: 10,
        },

        tableHeader: {
            backgroundColor: "#d3d3d3",
        },
    
        tableRow: {
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
        },
    
        tableCell: {
            fontSize: 16,
        },

        actionButtons: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2, // Adds space between buttons (React Native 0.71+)
            width: 100,
        },
        
        iconButton: {
            padding: 8, 
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 5, // Adds space between buttons
        },

        editButton: {
            backgroundColor: "#007BFF", // Blue for Edit
        },
        deleteButton: {
            backgroundColor: "#D32F2F", // Red for Delete
        },
    
    }
)