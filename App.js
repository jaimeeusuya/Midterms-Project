import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Icons } from './src/assets/components/icons';

import { drawerStyles } from './src/styles/DrawerStyle';

import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import UserManagementScreen from './src/screens/UserManagementScreen';
import EventManagementScreen from './src/screens/EventManagementScreen';
import PaymentManagementScreen from './src/screens/PaymentManagementScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

    const navigation = useNavigation(); // Hook for navigation

    const handleLogout = () => {

        navigation.replace("LoginScreen");
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={drawerStyles.drawerContainer}>
                <View style={drawerStyles.profileContainer}>
                    <Image 
                        source={require("./src/assets/user.png")}
                        style={drawerStyles.profileImage}
                    />
                    <Text style={drawerStyles.profileName}>Admin</Text>
                </View>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <TouchableOpacity style={drawerStyles.logoutButton} onPress={handleLogout}>

                <Icons.exit/> 

                <Text style={drawerStyles.logoutText}>Logout</Text>

            </TouchableOpacity>
        </View>
    );
};

const DrawerNavigator = () => {
    return(

        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions = {{
                headerShown: false,
                drawerActiveTintColor: '#000000',
                drawerInactiveTintColor: '#000',
                drawerActiveBackgroundColor: 'rgba(17, 78, 162, 0.5)',
                drawerLabelStyle: drawerStyles.drawerLabel,
                drawerStyle: drawerStyles.drawerStyle,
            }}
        >
            <Drawer.Screen name="Home" 
                component={LandingScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => (
                        <Icons.home/>
                    ),
                }}
            />

            <Drawer.Screen name="UserManagement" 
                component={UserManagementScreen}
                options={{
                    drawerLabel: 'User Management',
                    drawerIcon: () => (
                        <Icons.user/>
                    ),
                }}
            />

            <Drawer.Screen name="EventManagement" 
                component={EventManagementScreen}
                options={{
                    drawerLabel: 'Event Management',
                    drawerIcon: () => (
                        <Icons.calendar/>
                    ),
                }}
            />

            <Drawer.Screen name="PaymentManagement" 
                component={PaymentManagementScreen}
                options={{
                    drawerLabel: 'Payment Management',
                    drawerIcon: () => (
                        <Icons.payment/>
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};

const App = () => {

    return(
        <SafeAreaProvider
            style={{
                flexGrow: 1,
            }}>
            <GestureHandlerRootView style={{flex: 1}}>
                <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="LoginScreen"
                    screenOptions={{headerShown: false}}>
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="LandingScreen" component={LandingScreen} />
                    <Stack.Screen name="UserManagementScreen" component={UserManagementScreen} />
                    <Stack.Screen name="EventManagementScreen" component={EventManagementScreen} />
                    <Stack.Screen name="PaymentManagementScreen" component={PaymentManagementScreen} />
                    <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
                    
                </Stack.Navigator>
                
                </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
};

export default App


