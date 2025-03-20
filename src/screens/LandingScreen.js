import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from '../assets/components/icons';
import { useNavigation } from '@react-navigation/native';

import {style} from '../styles/LandingScreenStyle';


const LandingScreen = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };


    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={openDrawer}>
                <Icons.menu />
                </TouchableOpacity>

                <Text style={style.headerTitle}>GAP One</Text>

                <View style={style.spacer} /> {/* For spacing balance */}
            </View>

            <View style={style.content}>
                <Image 
                    style={style.imageContainer}
                    source = {require("../assets/GAPLogo.png")}
                />

                <Text style={style.welcomeText}>
                    Welcome Admin!
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default LandingScreen;