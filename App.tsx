import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'
import { s } from 'react-native-wind'
import CityDetails from './Screens/CityDetails';
import CountryDetails from './Screens/CountryDetails';
import Home from './Screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <View style={s`h-full`}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName='Screen1'>
          <Stack.Screen name='Screen1' component={Home} options={{ title: "Home" }} />
          <Stack.Screen name='Screen2' component={CountryDetails} options={{ title: "Country Details" }} />
          {/* 
          //@ts-ignore */}
          <Stack.Screen name='Screen3' component={CityDetails} options={{ title: "City Details" }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

