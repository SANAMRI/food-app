import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilScreen from './ProfilScreen';
import BookMarckScreen from './BookMarckScreen';
import SettingScreen from './SettingScreen';
import { FlatList } from 'native-base';

const Tab = createBottomTabNavigator();
export default function Home1() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require("../assets/bacground.jpg")} style={styles.image}>
       <View style={{height:100, backgroundColor:"#000", marginTop:20}}>
        <Image source={require("../assets/chickeen.png") } style={{width:120, height:130, backgroundColor:"#fff", marginLeft:130,}}/>
       </View>
       <View style={{ marginTop:20, marginLeft:20, flexDirection:"row", justifyContent:"space-between"}}>
      <TouchableOpacity  onPress={()=> {Alert.alert('Choisissez votre restaurant', 'Lille-03.20.85.18.43 , Roubaix-03.74.68.20.88')}}>
        <Image source={require("../assets/5585856.png")} style={{width:50, height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../assets/10312984.png")} style={{width:50, height:50}}/>
        </TouchableOpacity>
        </View>
       <View style={{marginTop:70}}>
      <FlatList  horizontal={true}>
      <Image source={require("../assets/affiche-2-1-2048x896.jpg")} style={{ height:150}}/>
      <Image source={require("../assets/affiche-4-1-1024x448.jpg")} style={{ height:150}}/>
      <Image source={require("../assets/affiche-5-1-1024x448.jpg")} style={{ height:150}}/>
      <Image source={require("../assets/affiche-6-1-1024x448.jpg")} style={{ height:150}}/>
      <Image source={require("../assets/affiche-7-1-1024x448.jpg")} style={{ height:150}}/>
      <Image source={require("../assets/test-enlarge-1024x448.jpg")} style={{ height:150}}/>
        </FlatList>
        </View>

      <Text style={styles.mams}>A VOUS DE CHOISIR</Text>
      <View style={{marginTop:40, marginLeft:20,  flexDirection:"row", justifyContent:"space-around"}}>
      <TouchableOpacity onPress={()=>{HomeScreen}}>
        <Image source={require("../assets/Royal-Double-Bacon-with-fries-and-coke-bottom1-600x600.png") } style={{width:150, height:160}}/>
        </TouchableOpacity>
        <TouchableOpacity>
      <Image source={require("../assets/Chickn-Beef-grey-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:40, marginLeft:20,  flexDirection:"row", justifyContent:"space-around"}}>
      <TouchableOpacity>
      <Image source={require("../assets/menu-enfant1-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require("../assets/Milkshake-violet-final-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:40, marginLeft:20,  flexDirection:"row", justifyContent:"space-around"}}>
      <TouchableOpacity>
      <Image source={require("../assets/Mix-x6-red1-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require("../assets/fries-orange1-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>

      </View>
      <View style={{marginTop:40, marginLeft:20,  flexDirection:"row", justifyContent:"space-around"}}>
      <TouchableOpacity>
      <Image source={require("../assets/coffe-brown-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require("../assets/Glace1-600x600.png") } style={{width:150, height:160}}/>
      </TouchableOpacity>
      </View>
      <View style={{height:150, backgroundColor:"#000", marginBottom:50, marginTop:50}}>
       <View style={{ flexDirection:"row", justifyContent:"space-around",  marginTop:30}}>
        <TouchableOpacity><Text style={{color:"white", fontWeight:"bold", fontSize:15}}>MENU</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{color:"white", fontWeight:"bold", fontSize:15}}>BURGER & WRAPS</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{color:"white", fontWeight:"bold", fontSize:15}}>PETITES FAIMS</Text></TouchableOpacity>
        </View>
        <View style={{ flexDirection:"row", justifyContent:"space-around", marginTop:30}}>
        <TouchableOpacity><Text style={{color:"white", fontWeight:"bold", fontSize:15}}>BOISSONS</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{color:"white", fontWeight:"bold", fontSize:15}}>DESSERTS</Text></TouchableOpacity>
        </View>
       </View>
       <Tab.Navigator
    initialRouteName="Home1"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home1}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfilScreen"
      component={ProfilScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="BookMarckScreen"
      component={BookMarckScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
     <Tab.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
      </ImageBackground>
      
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#ededed",
      
    },
    image: {
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    mams:{
      paddingTop:40,
        color:"#4f4f4d",
         fontSize:25,
          textAlign:"center",
          fontWeight:"800"
          
         
},
});

