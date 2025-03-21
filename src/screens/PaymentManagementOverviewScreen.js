import React, { useState } from "react";
import { 
    Text, View, SafeAreaView, TouchableOpacity, FlatList, 
    Alert, Modal, TextInput 
} from "react-native";
import DatePicker from "react-native-date-picker";
import { DataTable, Snackbar } from "react-native-paper";
import { Icons } from "../assets/components/icons";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/PaymentManagementOverviewStyle";

import { payments as initialPayments } from '../data/paymentsData';

const PaymentManagementOverviewScreen = () => {

    const navigation = useNavigation();
    const [payments, setPayments] = useState(initialPayments);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const totalPayments = payments.length;
    const completedPayments = payments.filter(p => p.status === "Completed").length;
    const pendingPayments = payments.filter(p => p.status === "Pending").length;

    const openPaymentModal = (payment) => {
        setSelectedPayment(payment);
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={style.container}>

            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Icons.menu />
                </TouchableOpacity>
                <Text style={style.headerTitle}>Payment Management</Text>
                <View style={style.spacer} />
            </View>

            <View style={style.overviewContainer}>
                <View style={[style.overviewCard, { backgroundColor: "#E0E0E0" }]}>
                    <Text style={style.overviewTitle}> Total Payments </Text>
                    <Text style={style.overviewNumber}>{totalPayments}</Text>
                </View>

                <View style={[style.overviewCard, { backgroundColor: "#D1C4E9" }]}>
                    <Text style={style.overviewTitle}> Completed </Text>
                    <Text style={style.overviewNumber}>{completedPayments}</Text>
                </View>

                <View style={[style.overviewCard, { backgroundColor: "#FFF9C4" }]}>
                    <Text style={style.overviewTitle}> Pending </Text>
                    <Text style={style.overviewNumber}>{pendingPayments}</Text>
                </View>
            </View>
            
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.editPaymentsButton} onPress={() => navigation.navigate("PaymentManagementScreen")}>
                    <Icons.editPayment />
                    <Text style={style.buttonText}>Edit Payments</Text>
                </TouchableOpacity>
            </View>
            
            <View style={style.content}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Client</DataTable.Title>
                        <DataTable.Title>Amount</DataTable.Title>
                        <DataTable.Title>Date</DataTable.Title>
                        <DataTable.Title>Status</DataTable.Title>
                        <DataTable.Title>Action</DataTable.Title>
                    </DataTable.Header>

                    <FlatList
                        data={payments}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <DataTable.Row>
                                <DataTable.Cell>{item.clientName}</DataTable.Cell>
                                <DataTable.Cell>${item.amount}</DataTable.Cell>
                                <DataTable.Cell>{item.date}</DataTable.Cell>
                                <DataTable.Cell>{item.status}</DataTable.Cell>
                                <DataTable.Cell>
                                    <TouchableOpacity
                                        style={style.viewButton}
                                        onPress={() => openPaymentModal(item)}
                                    >
                                        <Icons.view />
                                    </TouchableOpacity>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )}
                    />
                </DataTable>
            </View>

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Payment Details</Text>
                        {selectedPayment && (
                            <>
                                <Text style={style.paymentDetailText}>
                                    <Text style={style.boldText}>Client: {selectedPayment.clientName}</Text>
                                </Text>

                                <Text style={style.paymentDetailText}>
                                    <Text style={style.boldText}>Amount: ${selectedPayment.amount}</Text>
                                </Text>

                                <Text style={style.paymentDetailText}>
                                    <Text style={style.boldText}>Date: {selectedPayment.date}</Text>
                                </Text>
                                <Text style={style.paymentDetailText}>
                                    <Text style={style.boldText}>Status: {selectedPayment.status}</Text>
                                </Text>
                                <Text style={style.paymentDetailText}>
                                    <Text style={style.boldText}>Status: {selectedPayment.method}</Text>
                                </Text>
                                <Text style={style.paymentDetailText}>
                                    <Text style={style.boldText}>Status: {selectedPayment.reference}</Text>
                                </Text>
                            </>
                        )}
                        <TouchableOpacity
                            style={style.closeModalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={style.closeModalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            
        </SafeAreaView>
    );
};

export default PaymentManagementOverviewScreen;