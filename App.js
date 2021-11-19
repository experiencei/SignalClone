import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createStackNavigator();
const globalScreenOptions =  {
  headerTintColor: '#FFF',
  headerTitleStyle : { color : "white"},
  headerStyle: { backgroundColor: '#2C6BED' }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
           <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
