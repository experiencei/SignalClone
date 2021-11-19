import React from 'react';
import { Button , Input , Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    return (
        <View>
             <StatusBar style="light" />
             <Image 
               source={{
                   uri : "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
               }}
              style={{width :200 , height : 200}}
             />
             <View style={styles.inputContainer}>
               
             </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer : {},
})

