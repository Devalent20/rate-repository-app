import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import StyledInputText from '../components/StyledInputText.jsx';
import theme from '../theme.js';
import { Formik } from 'formik';
import { loginValidationSchema } from '../validationSchemas/login.js';

const LogInPage = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const users = [
        {
            email: 'prueba@gmail.com',
            password: '1234'
        },
        {
            email: 'dami@gmail.com',
            password: '123'
        },
    ];

    const handleSubmit = () => {
        const userFound = users.find((user) => user.email === email && user.password === password);

        if (userFound) {
            Alert.alert('Success', 'Login successful!');
        } else {
            Alert.alert('Error', 'Invalid email or password. Please try again.');
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={loginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                    <StyledInputText
                        style={{ fontSize: 16 }}
                        placeholder="E-mail"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <StyledInputText
                        style={{ fontSize: 16 }}
                        placeholder="Password"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                    />
                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
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
        color: theme.colors.primary,
    },
    errorText: {
        color: 'red',
    },
});

export default LogInPage;