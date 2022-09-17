import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { s } from 'react-native-wind'
import React from 'react'
import axios from 'axios'
//@ts-ignore
const CountryDetails = ({ navigation, route }) => {
    const [data, setData] = React.useState<any>('')

    React.useEffect(() => {
        fetchCountryData()
    }, [])
    const fetchCountryData = async () => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${route.params.paramKey}`)
            setData(res.data)
        } catch (err) {
            console.warn(err)
        }
    }

    return (
        data &&
        <ScrollView style={s`flex`}>{
            data.map((i:any) =>
                <View key={i.id} style={s`m-5 flex-col justify-center`}>
                    <Image style={{ width: 300, height: 200, margin: 8 }} source={{ uri: `${i.flags.png}` }} />
                    <Text style={s`text-3xl m-5`} >Capital:                {i.capital}</Text>
                    <Text style={s`text-3xl m-5`}>Country Population:  {i.population}</Text>
                    <TouchableOpacity style={s`p-3 m-5 justify-center items-center bg-blue-700 `} onPress={() => {
                        navigation.navigate("Screen3" ,{paramKey:i.capital})
                    }}>
                        <Text style={s`text-2xl text-white`}>Capital Weather</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        </ScrollView>
    )
}

export default CountryDetails