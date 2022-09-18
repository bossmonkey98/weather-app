import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'
import { s } from 'react-native-wind'
import CityDetails from './Screens/CityDetails';
import CountryDetails from './Screens/CountryDetails';
import Home from './Screens/Home';

export type ScreenParamList = {
  Home: undefined;
  CountryDetails: { Country: string | null | undefined; };
  CityDetails: { City: string | null | undefined; };
}

export default function App() {
  const Stack = createNativeStackNavigator<ScreenParamList>()
  return (
    <NavigationContainer >
      <View style={s`h-full`}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{ title: "Home" }} />
          {/*
          //@ts-ignore*/}
          <Stack.Screen name='CountryDetails' component={CountryDetails} options={{ title: "Country Details" }} />
          {/*
          //@ts-ignore*/}
          <Stack.Screen name='CityDetails' component={CityDetails} options={{ title: "City Details" }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

