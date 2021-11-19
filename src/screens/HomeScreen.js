import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({ navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle : "Signal",
        headerStyle = {backgroundColor: "#fff"},
        headerTitleStyle = {color: "black"},
        headerTintColor : "black"
    })
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
