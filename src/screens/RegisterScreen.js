import React from 'react'
import { Button , Input , Image } from 'react-native-elements';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from "expo-status-bar"
const RegisterScreen = ({ navigation}) => {
    return (
        <KeyboardAvoidingView>
            <StatusBar style="light" />
            
            <View style={styles.inputContainer}>

            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {}
})
