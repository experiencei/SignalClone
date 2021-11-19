import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from "expo-status-bar"
const RegisterScreen = ({ navigation}) => {
    return (
        <KeyboardAvoidingView>
            <StatusBar style="light" />

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {}
})
