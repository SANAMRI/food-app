import React from 'react'
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack
  } from "native-base";
  import { FlatList,TouchableOpacity } from "react-native";
import data from "../desserts.json"

export default function DessertScreen() {
  return (
    <FlatList
    data={data}
    renderItem={({ item }) =>
    <TouchableOpacity >
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }}
          _web={{
            shadow: 2,
            borderWidth: 0
          }}
          _light={{
            backgroundColor: "gray.50"
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: item.imageURL
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400"
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs"
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              {item.category}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.productName}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500"
                }}
                _dark={{
                  color: "violet.400"
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {item.price} TND
              </Text>
            </Stack>
            <Text fontWeight="400">
              {item.description}
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
             
            </HStack>
          </Stack>
        </Box>
      </Box>
      </TouchableOpacity>
      }
    keyExtractor={item => item.id}
  />
  )
}
