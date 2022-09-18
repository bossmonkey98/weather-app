import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { s } from 'react-native-wind'
import React from 'react'
import axios from 'axios'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenParamList } from '../App';


type CountryData = {
    id: any;
    capital: string;
    population: string;
    latlng: string[];
    flags: { png: string; };
}



const CountryDetails = () => {
    const [data, setData] = React.useState<[] | null>()
    const navigation = useNavigation<NativeStackNavigationProp<ScreenParamList, 'CountryDetails'>>()
    const { params: { Country } } = useRoute<RouteProp<ScreenParamList, 'CountryDetails'>>()
    React.useEffect(() => {
        fetchCountryData()
    }, [])
    const fetchCountryData = async () => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${Country}`)
            setData(res.data)
        } catch (err) {
            console.warn(err)
        }
    }

    return (
        data &&
        <ScrollView style={s`flex`}>{
            data.map((i: CountryData) =>
                <View key={i.id} style={s`m-5 flex-col justify-center`}>
                    <Image style={{ width: 300, height: 200, margin: 8 }} source={{ uri: `${i.flags.png}` }} />
                    <Text style={s`text-3xl m-5`} >Capital: {i.capital}</Text>
                    <Text style={s`text-3xl m-5`}>Country Population: {i.population}</Text>
                    <Text style={s`text-3xl m-5`}>Latitiude: {i.latlng[0]} deg</Text>
                    <Text style={s`text-3xl m-5`}>Longitude: {i.latlng[1]} deg</Text>
                    <TouchableOpacity style={s`p-3 m-5 justify-center items-center bg-blue-700 `} onPress={() => {
                        navigation.navigate('CityDetails', { City: i.capital })
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