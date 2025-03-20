import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { Icons } from '../assets/components/icons';
import { useNavigation } from '@react-navigation/native';

import {style} from '../styles/PaymentManagementStyle';


const PaymentManagementScreen = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    const [payments, setPayments] = useState([
        { id: 1, name: "John Doe", amount: "$50.00", status: "Completed" },
        { id: 2, name: "Jane Smith", amount: "$30.00", status: "Pending" },
        { id: 3, name: "Michael Johnson", amount: "$75.00", status: "Completed" },
    ]);

    const handleView = (id) => {
        Alert.alert("View Payment", `Viewing payment details for ID: ${id}`);
    };

    const handleDelete = (id) => {
        Alert.alert(
            "Delete Payment",
            "Are you sure you want to delete this payment record?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", onPress: () => setPayments(payments.filter(payment => payment.id !== id)) },
            ]
        );
    };

    return (
                    <SafeAreaView style={style.container}>
                        <View style={style.header}>
                            <TouchableOpacity onPress={openDrawer}>
                            <Icons.menu />
                            </TouchableOpacity>
            
                            <Text style={style.headerTitle}>Payment Management</Text>
            
                            <View style={style.spacer} /> {/* For spacing balance */}
                        </View>
                            
                        <View style={style.content}>
                        <DataTable>
                    {/* Table Header */}
                    <DataTable.Header style={style.tableHeader}>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title>Amount</DataTable.Title>
                        <DataTable.Title>Status</DataTable.Title>
                        <DataTable.Title>Actions</DataTable.Title>
                    </DataTable.Header>

                        {/* Table Rows */}
                        <FlatList
                            data={payments}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <DataTable.Row>
                                    <DataTable.Cell>{item.name}</DataTable.Cell>
                                    <DataTable.Cell>{item.amount}</DataTable.Cell>
                                    <DataTable.Cell>{item.status}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <View style={style.actionButtons}>
                                            {/* View Button */}
                                            <TouchableOpacity
                                                onPress={() => handleView(item.id)}
                                                style={[style.iconButton, style.viewButton]}
                                            >
                                                <Icons.view />
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
                                        
export default PaymentManagementScreen;