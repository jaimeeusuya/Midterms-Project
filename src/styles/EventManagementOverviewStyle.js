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
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    overviewCard: {
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    overviewTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
    },

    overviewNumber: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 5,
    },

    /* BUTTONS */
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },

    addEventButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#28A745', 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 5,
        width: 150,
    },

    editEventsButton: {
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
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
        marginLeft: 10,
    },

    /* TABLE CONTENT */
    content: {
        flex: 1,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    /* MODAL */
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
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
        marginBottom: 10,
    },

    input: {
        width: "100%",
        padding: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
    },

    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },

    modalButton: {
        flex: 1,
        backgroundColor: "#4CAF50",
        padding: 10,
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

    datePickerButton: {
        padding: 12,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: "#E0E0E0",
        alignItems: "center",
        width: 265,
        marginBottom: 10,
    },
    
    datePickerText: {
        fontSize: 16,
        color: "black",
    },

    eventDetailText: {
        fontSize: 16,
        marginVertical: 5,
    },
    
    boldText: {
        fontWeight: "bold",
    },
    
    closeModalButton: {
        marginTop: 15,
        backgroundColor: "#FF3D00",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    
    closeModalButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
    
    viewButton: {
        backgroundColor: "#1976D2",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    
    viewButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },

});