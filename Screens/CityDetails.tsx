import { View, Text, Image } from 'react-native'
import React from 'react'
import axios from 'axios'
import {s} from 'react-native-wind'

const CityDetails = ({ route }: any) => {
  const url = `http://api.weatherstack.com/current?access_key=032a90b7419164fc6454a98698a00a6a&query=${route.params.paramKey}`
  const [cityData, setCityData] = React.useState('')
  const fetchCityData = async () => {
    try {
      const res: any = axios.get(url)
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
      {/*
        //@ts-ignore*/}
      <Image style={{width:250 , height:250}} source={{ uri: `${cityData.data.current.weather_icons}` }} />
      {/*
        //@ts-ignore*/}
      <Text style={s`text-3xl m-5`}>Temperature: {cityData.data.current.temperature} &deg; C</Text>
      {/*
        //@ts-ignore*/}
      <Text style={s`text-3xl m-5`}>Precipitation: {cityData.data.current.precip} %</Text>
      {/*
        //@ts-ignore*/}
      <Text style={s`text-3xl m-5`}>Wind Speed: {cityData.data.current.wind_speed} Kmph</Text>
    </View>
  )
}

export default CityDetails