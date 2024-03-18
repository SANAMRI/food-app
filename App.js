import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, requireNativeComponent } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import { NativeBaseProvider } from 'native-base';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <NativeBaseProvider>
  <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    </NativeBaseProvider>
   </NavigationContainer>
  );

};