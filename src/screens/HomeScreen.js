import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import { AntDesigner , SimpleLineIcons} from '@expo/vector-icons'
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
        headerRight : () => (
            <View style={{
                flexDirection : "row",
                justifyContent : "center",
                width : 80,
                marginRight :20}}>
                <TouchableOpacity activeOpacity={0.5}>
                   <AntDesigner name="camerao" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                   <AntDesigner name="pencil" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        )
    });
  }, [navigation])

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
