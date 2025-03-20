import { StyleSheet } from "react-native";

export const drawerStyles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    profileContainer: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        marginBottom: 20,
        borderColor: "#114EA2",
        borderWidth: 2,
        borderRadius: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
    },
    profileName: {
        color: "#00000",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    drawerStyle: {
        backgroundColor: "#F0FFFF",
        width: 280,
    },
    drawerLabel: {
        fontSize: 16,
        marginLeft: -5,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderColor: "#114EA2",
        borderWidth: 2,
        borderRadius: 10,
        marginStart: 10,
        marginEnd: 10,
    },
    logoutText: {
        fontSize: 16,
        color: "#00000", // Red color for logout
        fontWeight: "bold",
        marginLeft: 10
    },
});
