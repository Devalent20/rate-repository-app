import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import StyledInputText from '../components/StyledInputText.jsx';
import theme from '../theme.js';

/**
 * Component for the login page.
 */
const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const users = [
        {
            email: 'prueba@gmail.com',
            password: '1234'
        },
        {
            email: 'dami@gmail.com',
            password: '123'
        },
    ]
    /**
     * Handles the form submission.
     */
    const handleSubmit = () => {
        // Perform actions as needed with the email and password.
        const userFound = users.find((user) => user.email === email && user.password === password);

        if (userFound) {
            Alert.alert('Success', 'Login successful!');
        } else {
            Alert.alert('Error', 'Invalid email or password. Please try again.');
        }
    };

    const validate = values => {
        const errors = {

        }

        if (!values.email) {
            errors.email = 'Email is required'
        }
    }

    return (
        <View style={styles.form}>
            {/* Input field for email */}
            <StyledInputText
                style={{ fontSize: 16 }}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />

            {/* Input field for password */}
            <StyledInputText
                style={{ fontSize: 16 }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Submit button */}
            <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 12,
    },
    button: {
        alignItems: 'center',
        borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
        height: 50,
        width: 100,
    },
    buttonText: {
        fontSize: 20,
        color: theme.colors.primary
    },
});

export default LogInPage;