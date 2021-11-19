import React, { useState } from 'react'
import { Button , Input , Image } from 'react-native-elements';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from "expo-status-bar"
const RegisterScreen = ({ navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () => {
        
    }

    return (
        <KeyboardAvoidingView>
            <StatusBar style="light" />
            <Text h3 style={{marginTop: 50}}>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder="Eamil"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input 
                    placeholder="Profile Picture URL (optional)"
                    autoFocus
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {}
})
