import { View, Text, Image } from 'react-native'
import React from 'react'
import axios from 'axios'
import { s } from 'react-native-wind'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreenParamList } from '../App';


type cityDatatypes = {
  data: {
    current: {
      weather_icons: string;
      temperature: string | number;
      precip: string | number;
      wind_speed: string | number;
    };
  };
}


const CityDetails = () => {
  const { params: { City } } = useRoute<RouteProp<ScreenParamList, 'CityDetails'>>()
  const [cityData, setCityData] = React.useState<cityDatatypes | null>()
  const url = `http://api.weatherstack.com/current?access_key=032a90b7419164fc6454a98698a00a6a&query=${City}`

  const fetchCityData = async () => {
    try {
      const res = axios.get(url)
      setCityData(await res)
    } catch (err) {
      console.log("api rejected")
      console.warn(err)
    }
  }

  React.useEffect(() => { fetchCityData() }, [])
  return (
    cityData &&
    <View style={s`flex-1 items-center justify-center`}>
      <Image style={{ width: 250, height: 250 }} source={{ uri: `${cityData.data.current.weather_icons}` }} />
      <Text style={s`text-3xl m-5`}>Temperature: {cityData.data.current.temperature} &deg; C</Text>
      <Text style={s`text-3xl m-5`}>Precipitation: {cityData.data.current.precip} %</Text>
      <Text style={s`text-3xl m-5`}>Wind Speed: {cityData.data.current.wind_speed} Kmph</Text>
    </View>
  )
}

export default CityDetails