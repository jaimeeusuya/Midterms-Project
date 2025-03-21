import React, { useState } from "react";
import { 
    Text, View, SafeAreaView, TouchableOpacity, FlatList, 
    Alert, Modal, TextInput 
} from "react-native";
import { DataTable, Snackbar } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { Icons } from "../assets/components/icons";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/UserManagementOverviewStyle";
import { users as initialUsers } from "../data/usersData";

const UserManagementOverviewScreen = () => {
    const navigation = useNavigation();
    
    const [users, setUsers] = useState(initialUsers);
    const [modalVisible, setModalVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const [selectedRole, setSelectedRole] = useState("Select Role"); // Default role

    const [snackbarVisible, setSnackbarVisible] = useState(false);

    // Count Users by Role
    const totalUsers = users.length;
    const memberCount = users.filter(user => user.role === "Member").length;
    const coachCount = users.filter(user => user.role === "Coach").length;
    const athleteCount = users.filter(user => user.role === "Athlete").length;

    // Function to Add a New User
    const addUser = () => {
        if (newName.trim() === "") {
            Alert.alert("Error", "Please enter a valid name.");
            return;
        }

        const newUser = {
            id: users.length + 1,
            name: newName,
            role: selectedRole,
        };

        setUsers([...users, newUser]);
        setNewName("");
        setSelectedRole("Member");
        setModalVisible(false);

        setSnackbarVisible(true);
    };

    return (
        <SafeAreaView style={style.container}>
            {/* Header */}
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Icons.menu />
                </TouchableOpacity>
                <Text style={style.headerTitle}>User Management</Text>
                <View style={style.spacer} />
            </View>

            {/* User Overview Section */}
            <View style={style.overviewContainer}>
                <View style={[style.overviewCard, { backgroundColor: "#E0E0E0" }]}>
                    <Text style={style.overviewTitle}>Total Users</Text>
                    <Text style={style.overviewNumber}>{totalUsers}</Text>
                </View>
                <View style={[style.overviewCard, { backgroundColor: "#D1C4E9" }]}>
                    <Text style={style.overviewTitle}>Athletes</Text>
                    <Text style={style.overviewNumber}>{athleteCount}</Text>
                </View>
                <View style={[style.overviewCard, { backgroundColor: "#FFF9C4" }]}>
                    <Text style={style.overviewTitle}>Members</Text>
                    <Text style={style.overviewNumber}>{memberCount}</Text>
                </View>
                <View style={[style.overviewCard, { backgroundColor: "#FFCCBC" }]}>
                    <Text style={style.overviewTitle}>Coaches</Text>
                    <Text style={style.overviewNumber}>{coachCount}</Text>
                </View>
            </View>

            {/* Buttons */}
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.addUserButton} onPress={() => setModalVisible(true)}>
                    <Icons.adduser />
                    <Text style={style.buttonText}>Add User</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.editUsersButton} onPress={() => navigation.navigate("UserManagementScreen")}>
                    <Icons.edit />
                    <Text style={style.buttonText}>Edit Users</Text>
                </TouchableOpacity>
            </View>

            {/* User Table */}
            <View style={style.content}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title>Role</DataTable.Title>
                    </DataTable.Header>

                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <DataTable.Row>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell>{item.role}</DataTable.Cell>
                            </DataTable.Row>
                        )}
                    />
                </DataTable>
            </View>

            {/* Add User Modal */}
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Add New User</Text>

                        <Text style={style.label}>Name</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Enter Name"
                            placeholderTextColor="darkgray"
                            value={newName}
                            onChangeText={setNewName}
                        />

                        <Text style={style.label}>Select Role</Text>
                        <View style={style.pickerContainer}>
                            <Picker
                                selectedValue={selectedRole}
                                onValueChange={(itemValue) => setSelectedRole(itemValue)}
                                style={style.picker}
                            >
                                <Picker.Item label="Select Role" value="" />
                                <Picker.Item label="Member" value="Member" />
                                <Picker.Item label="Coach" value="Coach" />
                                <Picker.Item label="Athlete" value="Athlete" />
                            </Picker>
                        </View>

                        <View style={style.modalButtonContainer}>
                            <TouchableOpacity style={style.modalButton} onPress={addUser}>
                                <Text style={style.modalButtonText}>Add</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[style.modalButton, { backgroundColor: "#FF3D00" }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={style.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000} // 3 seconds
                action={{
                    label: "OK",
                    onPress: () => setSnackbarVisible(false),
                }}
                style={{ backgroundColor: "#28A745" }} // Success green
            >
                User added successfully!
            </Snackbar>
        </SafeAreaView>
    );
};

export default UserManagementOverviewScreen;