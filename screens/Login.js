import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";


export default function Login() {
  return (
    <NativeBaseProvider style={styles.container}>
        <Image style = {styles.img} source={require("../assets/Login.png")}/>
        <Text style={styles.mams}>Mama's Kitchen</Text>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
         sign in to your Account
        </Heading>
       

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="3" style={{backgroundColor:"#ff4d8b"}}>
            Login
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
              backgroundColor:"#ff4d8b",
            color: "white",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
             Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:360,
    backgroundColor:"#fff"
  },
  img: {
    
    width: 400,
    height: 250,
  },
  mams:{
    color:"#ff4d8b",
     fontSize:45,
      fontFamily: "comicneue-bold", 

  },
  textsign:{
    color:"#000",
    fontSize:25,

  },
  input:{
    width:200,
    height: 45,  
    margin: 12,   
    backgroundColor: '#ede1e1',  
      borderRadius: 20,
  }
});