import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { DataTable, Button } from "react-native-paper";
import { Icons } from '../assets/components/icons';
import { useNavigation } from '@react-navigation/native';

import { events as initialEvents } from '../data/eventsData';

import {style} from '../styles/EventManagementStyle';


const EventManagementScreen = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    // Sample Event Data
    const [events, setEvents] = useState(initialEvents);

    const handleEdit = (id) => {
        Alert.alert("Edit Event", `Editing event with ID: ${id}`);
    };

    const handleDelete = (id) => {
        Alert.alert(
            "Delete Event",
            "Are you sure you want to delete this event?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", onPress: () => setEvents(events.filter(event => event.id !== id)) },
            ]
        );
    };

    return (
                <SafeAreaView style={style.container}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={openDrawer}>
                        <Icons.menu />
                        </TouchableOpacity>
        
                        <Text style={style.headerTitle}>Event Management</Text>
        
                        <View style={style.spacer} /> {/* For spacing balance */}
                    </View>

                    <View style={style.backContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                            <Icons.back />
                        </TouchableOpacity>
                    
                        <Text style={style.backButtonText}> Event Management Overview </Text>
                    </View>
                        
                    <View style={style.content}>
                        <DataTable>
                                {/* Table Header */}
                                <DataTable.Header style={style.tableHeader}>
                                    <DataTable.Title>Event Name</DataTable.Title>
                                    <DataTable.Title>Date</DataTable.Title>
                                    <DataTable.Title>Actions</DataTable.Title>
                                </DataTable.Header>

                                {/* Table Rows */}
                                <FlatList
                                    data={events}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                        <DataTable.Row>
                                            <DataTable.Cell>{item.name}</DataTable.Cell>
                                            <DataTable.Cell>{item.date}</DataTable.Cell>
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
                
export default EventManagementScreen;