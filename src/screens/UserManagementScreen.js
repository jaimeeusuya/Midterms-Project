import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { Icons } from '../assets/components/icons';
import { useNavigation } from '@react-navigation/native';

import { users as initialUsers } from "../data/usersData";

import {style} from '../styles/UserManagementStyle';


const UserManagementScreen = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    const [users, setUsers] = useState( initialUsers );

    const handleEdit = (id) => {
        Alert.alert("Edit User", `Editing user with ID: ${id}`);

    };

    const handleDelete = (id) => {
        Alert.alert(
            "Delete User",
            "Are you sure you want to delete this user?",
            [
                {text: "Cancel", style: "cancel"},
                {text: "Delete", onPress: () => setUsers(users.filter(user => user.id !== id)) }
            ]
        );
    };


    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={openDrawer}>
                <Icons.menu />
                </TouchableOpacity>

                <Text style={style.headerTitle}>User Management</Text>

                <View style={style.spacer} /> {/* For spacing balance */}
            </View>

            <View style={style.backContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                    <Icons.back />
                </TouchableOpacity>

                <Text style={style.backButtonText}> User Management Overview </Text>
            </View>

            <View style={style.content}>
                <DataTable>
                    {/* Table Header */}
                    <DataTable.Header>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title>Role</DataTable.Title>
                        <DataTable.Title>Actions</DataTable.Title>
                    </DataTable.Header>

                    {/* Table Rows */}
                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <DataTable.Row>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell>{item.role}</DataTable.Cell>
                                <DataTable.Cell>
                                    <View style={style.actionButtons}>
                                        {/* Edit Button */}
                                        <TouchableOpacity
                                            onPress={() => handleEdit(item.id)}
                                            style={[style.iconButton, style.editButton]}
                                        >
                                            <Icons.edit/>
                                        </TouchableOpacity>

                                        {/* Delete Button */}
                                        <TouchableOpacity
                                            onPress={() => handleDelete(item.id)}
                                            style={[style.iconButton, style.deleteButton]}
                                        >
                                            <Icons.delete/>
                                        </TouchableOpacity>
                                    </View>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )}
                    />
                </DataTable>
            </View>
        </SafeAreaView>
    );
};

export default UserManagementScreen;