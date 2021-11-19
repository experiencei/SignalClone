import React, { useState } from 'react';
import { Button , Input , Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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
               <Input 
               placeholder="Email" 
               autoFocus type="email" 
               value={email} 
               onChangeText={(text) => setEmail(text)}/>

               <Input 
                placeholder="Password"
                secureTextEntry 
                type="password"
                value={password} 
                onChangeText={(text) => setPassword(text)}/>
                
             </View>
             <Button containerStyle={styles.button} title="Login" />
             <Button containerStyle={styles.button} type="outline" title="Register" />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer : {},
    button : {}
})

