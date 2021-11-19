import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import { auth } from '../firebase/firebase'

const HomeScreen = ({ navigation}) => {
   const signOutUser = () => {
       auth.signOut().then(() => {
           navigation.replace("Login")
       })
   }
  useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle : "Signal",
        headerStyle : {backgroundColor: "#fff"},
        headerTitleStyle :{color: "black"},
        headerTintColor : "black",
        headerLeft : () => (
        <View style={{marginLeft : 20}}>
        <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{uri : auth?.currentUser?.photoURL}} />
        </TouchableOpacity>
        </View>
        ),
    });
  }, [input])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
