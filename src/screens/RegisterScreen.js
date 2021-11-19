import React from 'react'
import { Button , Input , Image } from 'react-native-elements';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from "expo-status-bar"
const RegisterScreen = ({ navigation}) => {
    return (
        <KeyboardAvoidingView>
            <StatusBar style="light" />
            <Text h3 style={{marginTop: 50}}>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name"
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {}
})
