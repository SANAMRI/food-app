import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, requireNativeComponent } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home1 from './screens/Home1';
import Login from './screens/Login';
import Register from './screens/Register';
import { NativeBaseProvider } from 'native-base';
import KidScreen from './screens/KidScreen'
import Carousel1 from './screens/Carousel1';





export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <NativeBaseProvider>
      <Stack.Navigator initialRouteName='Home1'>
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name ="KidScreen" component={KidScreen}/>
      <Stack.Screen name="carousel1" component={Carousel1}/>
    </Stack.Navigator>
    </NativeBaseProvider>
   </NavigationContainer>
  );

};