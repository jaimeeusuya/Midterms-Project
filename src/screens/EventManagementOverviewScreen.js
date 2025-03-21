import React, { useState } from "react";
import { 
    Text, View, SafeAreaView, TouchableOpacity, FlatList, 
    Alert, Modal, TextInput 
} from "react-native";
import DatePicker from "react-native-date-picker";
import { DataTable, Snackbar } from "react-native-paper";
import { Icons } from "../assets/components/icons";
import { useNavigation } from "@react-navigation/native";
import { style } from "../styles/EventManagementOverviewStyle";
import { events as initialEvents } from "../data/eventsData";

const EventManagementOverviewScreen = () => {

    const navigation = useNavigation();
    
    const [events, setEvents] = useState(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [newEventName, setNewEventName] = useState("");
    const [newEventVenue, setNewEventVenue] = useState("");
    const [newEventDate, setNewEventDate] = useState(new Date());
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const openEventModal = (event) => {
        setSelectedEvent(event);
        setModalVisible1(true);
    };

    // Count Events by Status
    const totalEvents = events.length;
    const upcomingCount = events.filter(event => event.status === "Upcoming").length;
    const ongoingCount = events.filter(event => event.status === "Ongoing").length;
    const completedCount = events.filter(event => event.status === "Completed").length;

    // Function to Add an Event
    const addEvent = () => {
        if (newEventName.trim() === "" || newEventVenue.trim() === "" ) {
            Alert.alert("Error", "Please enter event name and venue.");
            return;
        }

        const formattedDate = newEventDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

        const newEvent = {
            id: events.length + 1,
            name: newEventName,
            date: formattedDate,
            location: newEventVenue,
            status: "Upcoming", // Default status
        };

        setEvents([...events, newEvent]); // Add new event
        setNewEventName(""); // Reset input
        setNewEventDate(new Date());
        setNewEventVenue("");
        setModalVisible(false); // Close modal
        
        setSnackbarVisible(true); // Show success snackbar
    };

    return (
        <SafeAreaView style={style.container}>
            {/* Header */}
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Icons.menu />
                </TouchableOpacity>
                <Text style={style.headerTitle}>Event Management</Text>
                <View style={style.spacer} />
            </View>

            {/* Event Overview Section */}
            <View style={style.overviewContainer}>
                <View style={[style.overviewCard, { backgroundColor: "#E0E0E0" }]}>
                    <Text style={style.overviewTitle}>Total Events</Text>
                    <Text style={style.overviewNumber}>{totalEvents}</Text>
                </View>
                <View style={[style.overviewCard, { backgroundColor: "#D1C4E9" }]}>
                    <Text style={style.overviewTitle}>Upcoming</Text>
                    <Text style={style.overviewNumber}>{upcomingCount}</Text>
                </View>
                <View style={[style.overviewCard, { backgroundColor: "#FFF9C4" }]}>
                    <Text style={style.overviewTitle}>Ongoing</Text>
                    <Text style={style.overviewNumber}>{ongoingCount}</Text>
                </View>
                <View style={[style.overviewCard, { backgroundColor: "#FFCCBC" }]}>
                    <Text style={style.overviewTitle}>Completed</Text>
                    <Text style={style.overviewNumber}>{completedCount}</Text>
                </View>
            </View>

            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.addEventButton} onPress={() => setModalVisible(true)}>
                    <Icons.addEvent />
                    <Text style={style.buttonText}>Add Event</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.editEventsButton} onPress={() => navigation.navigate("EventManagementScreen")}>
                    <Icons.editEvent />
                    <Text style={style.buttonText}>Edit Events</Text>
                </TouchableOpacity>
            </View>

            {/* Event List */}
            <View style={style.content}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Event Name</DataTable.Title>
                        <DataTable.Title>Date</DataTable.Title>
                        <DataTable.Title>Status</DataTable.Title>
                        <DataTable.Title>Action</DataTable.Title>
                    </DataTable.Header>

                    <FlatList
                        data={events}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <DataTable.Row>
                                <DataTable.Cell>{item.name}</DataTable.Cell>
                                <DataTable.Cell>{item.date}</DataTable.Cell>
                                <DataTable.Cell>{item.status}</DataTable.Cell>
                                <DataTable.Cell>
                                    <TouchableOpacity
                                        style={style.viewButton}
                                        onPress={() => openEventModal(item)}
                                    >
                                        <Icons.view />
                                    </TouchableOpacity>
                                </DataTable.Cell>
                            </DataTable.Row>
                        )}
                    />
                </DataTable>
            </View>

            <Modal visible={modalVisible1} animationType="slide" transparent>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Event Details</Text>

                        {selectedEvent && (
                            <>
                                <Text style={style.eventDetailText}>
                                    <Text style={style.boldText}>Name:</Text> {selectedEvent.name}
                                </Text>
                                <Text style={style.eventDetailText}>
                                    <Text style={style.boldText}>Date:</Text> {selectedEvent.date}
                                </Text>
                                <Text style={style.eventDetailText}>
                                    <Text style={style.boldText}>Venue:</Text> {selectedEvent.location}
                                </Text>
                                <Text style={style.eventDetailText}>
                                    <Text style={style.boldText}>Status:</Text> {selectedEvent.status}
                                </Text>
                            </>
                        )}

                        <TouchableOpacity
                            style={style.closeModalButton}
                            onPress={() => setModalVisible1(false)}
                        >
                            <Text style={style.closeModalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Add Event Modal */}
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Add New Event</Text>
                        <Text style={style.label}> Event Name </Text>
                        <TextInput
                            style={style.input}
                            placeholder="Enter Event Name"
                            placeholderTextColor="darkgray"
                            value={newEventName}
                            onChangeText={setNewEventName}
                        />

                        <Text style={style.label}> Event Date </Text>
                        <TouchableOpacity
                            style={style.datePickerButton}
                            onPress={() => setOpenDatePicker(true)}
                        >
                            <Text style={style.datePickerText}>
                                {newEventDate ? newEventDate.toISOString().split("T")[0] : "Select Date"} 
                            </Text>
                        </TouchableOpacity>

                        <Text style={style.label}> Event Venue </Text>
                        <TextInput
                            style={style.input}
                            placeholder="Enter Event Venue"
                            placeholderTextColor="darkgray"
                            value={newEventVenue}
                            onChangeText={setNewEventVenue}
                        />

                        <DatePicker
                            modal
                            open={openDatePicker}
                            date={newEventDate}
                            mode="date"
                            onConfirm={(date) => {
                                setOpenDatePicker(false);
                                setNewEventDate(date);
                            }}
                            onCancel={() => setOpenDatePicker(false)}
                        />

                        <View style={style.modalButtonContainer}>
                            <TouchableOpacity style={style.modalButton} onPress={addEvent}>
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

            {/* Snackbar for Success Message */}
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
                Event added successfully!
            </Snackbar>
        </SafeAreaView>
    );
};

export default EventManagementOverviewScreen;