import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { Icons } from '../assets/components/icons';
import { useNavigation } from '@react-navigation/native';

import {style} from '../styles/PaymentManagementStyle';

import { payments as initialPayments } from '../data/paymentsData';


const PaymentManagementScreen = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    const [payments, setPayments] = useState(initialPayments);

    const handleView = (id) => {
        Alert.alert("Edit Payment", `Editing payment details for ID: ${id}`);
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

                        <View style={style.backContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                                <Icons.back />
                            </TouchableOpacity>
                                            
                            <Text style={style.backButtonText}> Payment Management Overview </Text>
                        </View>
                            
                        <View style={style.content}>
                            <DataTable>
                                <DataTable.Header style={style.tableHeader}>
                                    <DataTable.Title>Name</DataTable.Title>
                                    <DataTable.Title>Amount</DataTable.Title>
                                    <DataTable.Title>Status</DataTable.Title>
                                    <DataTable.Title>Actions</DataTable.Title>
                                </DataTable.Header>

                                <FlatList
                                    data={payments}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                        <DataTable.Row>
                                            <DataTable.Cell>{item.clientName}</DataTable.Cell>
                                            <DataTable.Cell>{item.amount}</DataTable.Cell>
                                            <DataTable.Cell>{item.date}</DataTable.Cell>
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