import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        marginBottom: 20,
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

    overviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 15,
        marginBottom: 10,
    },

    overviewCard: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: "#E0E0E0", // Subtle background
    },

    overviewTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: "bold",
    },

    overviewNumber: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },

    addUserButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#28A745', // Green for Add User
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 5,
        width: 150,
    },

    editUsersButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#114EA2', 
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginHorizontal: 5,
        width: 150,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },

    /** MODAL STYLES */
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    modalButton: {
        flex: 1,
        backgroundColor: "#28A745",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },

    /** PICKER STYLES */
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
        backgroundColor: "#FFF",
        paddingHorizontal: 10,
        justifyContent: "center",
        marginBottom: 10,
    },

    picker: {
        height: 50,
        color: "#333",
    },
});
