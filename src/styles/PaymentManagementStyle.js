import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    header: {
        backgroundColor: "#114EA2",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },

    headerTitle: {
        flex: 1,
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },

    spacer: {
        width: 24, // Keeps the header balanced
    },

    content: {
        flex: 1,
        padding: 10,
        marginTop: 30,
    },

    tableHeader: {
        paddingVertical: 8,
        borderRadius: 5,
    },

    actionButtons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1, // Spacing between buttons
        width: 60, // Ensures proper spacing
    },

    iconButton: {
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 1,
        width: 35,
    },

    viewButton: {
        backgroundColor: "#007BFF",
    },

    deleteButton: {
        backgroundColor: "#D32F2F",
    },

    backContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10, 
        position: "absolute",
        top: 60,
        left: 0,
        zIndex: 10, 
        padding: 10,
    },

    backButton: {
        marginRight: 3,
    },

    backButtonText: {
        fontSize: 18, 
        fontWeight: "bold",
        color: "#114EA2",
    },
});
