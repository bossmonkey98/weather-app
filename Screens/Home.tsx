import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { s } from 'react-native-wind'
import React, { useState } from 'react'

//@ts-ignore-check
const Home = ({ navigation }) => {
  const [country, setCountry]= useState('')
  
  return (
    <View style={s`flex-1 items-center justify-center bg-sky-50`}>
      <Text style={s`text-5xl m-3 font-semibold`}>Welcome</Text>
      <Text style={s`text-2xl m-3 font-semibold`}>Enter Country name below</Text>
      <TextInput placeholder='Type here...' style={s`w-8/12 h-16 border-black border-2 m-3 p-4 text-xl`} onChangeText={(e) => setCountry(e)} />
      <TouchableOpacity disabled={country ? false : true} style={s`m-3 p-3 w-1/4 ${country ? "bg-blue-700" : "bg-gray-300"} flex items-center justify-center`}
        onPress={() => {
          navigation.navigate('Screen2',{paramKey:country})
        }}>
        <Text style={s`text-xl text-white`}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home