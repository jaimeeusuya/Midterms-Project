import React, { useState } from 'react';

import { Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';

import { style } from '../styles/LoginScreenStyle';

import Buttons from '../assets/components/buttons';


const LoginScreen = ({ navigation }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value});

        setErrors({ ...errors, [field]: ''});
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {}; // temporarily collects error messages

        if (!formData.username.trim()) {
            newErrors.username = "Username is required.";
            valid = false;
        } else if (formData.username !== "admin") {
            newErrors.username = "Invalid username.";
            valid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
            valid = false;
        } else if (formData.password !== "admin123") {
            newErrors.password = "Invalid password.";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            Alert.alert("Success", "Login Successful!");
            navigation.replace("MainDrawer");
        }
    };

    return (
        
        <SafeAreaView style={style.container}>
            
            <Image 
                style = {style.imageContainer}
                source = {require('../assets/GAPLogo.png')}
            />

            <Text style = {style.appTitle}>
                GAP ONE
            </Text>

            <Text style = {style.descriptionText1}>
                Official Member's Portal of
            </Text>

            <Text style = {style.descriptionText2}>
                Gymnastics Association of the Philippines
            </Text>

            <TextInput 
                style = {[ style.TextInput, errors.username && style.inputError ]}
                value={formData.username}
                placeholder="Enter Username"
                placeholderTextColor="darkgray"
                onChangeText = {(value) => handleInputChange('username', value)}
            />

            {errors.username ? <Text style={style.errorText}>{errors.username}</Text> : null}

            <TextInput 
                style = {[ style.passwordInput, errors.password && style.inputError ]}
                value={formData.password}
                placeholder="Enter Password"
                placeholderTextColor="darkgray"
                secureTextEntry={true}
                onChangeText = {(value) => handleInputChange('password', value)}
            />

            {errors.password ? <Text style={style.errorText}>{errors.password}</Text> : null}

            <View style={style.buttonsContainer}>

                <Buttons.PrimaryButton
                    title="Log in"
                    onPress={validateForm}
                />

            </View>


        </SafeAreaView>
    );
}

export default LoginScreen