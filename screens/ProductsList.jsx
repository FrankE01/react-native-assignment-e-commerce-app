import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import {
  Center,
  Pressable,
  HStack,
  Text,
  Input,
  Box,
  Heading,
  ScrollView,
} from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Product from "./Product";
import AppContext from "../AppContext";

export default function ProductsList({ navigation }) {
  const { allProducts, handleLike: onLike } = useContext(AppContext);
  const likedProducts = allProducts.filter((product) => {
    return product.favorite == true;
  });
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#df8d8e" />
      <HStack
        bg="#df8d8e"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width={Dimensions.get("screen").width}
        marginTop={39}
        paddingTop={5}
        alignSelf="center"
        alignContent="space-between"
      >
        <Pressable
          opacity={0.75}
          marginLeft={2}
          onPress={() => {
            navigation.navigate("Account");
          }}
          bg="#fff"
          padding={1.5}
          borderRadius={10}
        >
          <MaterialCommunityIcons name="account" size={24} color="black" />
        </Pressable>
        <Text fontFamily="ZenKakuGothicNewBold" fontSize={24}>
          KROMCASE
        </Text>
        <Pressable
          opacity={0.75}
          marginRight={2}
          onPress={() => navigation.navigate("Cart")}
          bg="#fff"
          padding={1.5}
          borderRadius={10}
          position="relative"
        >
          <MaterialCommunityIcons
            name={likedProducts.length === 0 ? "cart" : "cart-arrow-right"}
            size={24}
            color="black"
          />
        </Pressable>
      </HStack>
      <Box
        marginTop={-2}
        bg="#df8d8e"
        borderBottomRightRadius={30}
        borderBottomLeftRadius={30}
      >
        <Input
          placeholder="Search"
          py="1"
          px="2"
          margin={3}
          bg="#fff"
          fontSize={20}
          borderWidth={0}
          borderRadius={10}
          InputLeftElement={
            <Ionicons style={{ marginLeft: 10 }} name="search" size={24} />
          }
          InputRightElement={
            <MaterialCommunityIcons
              style={{ marginRight: 10 }}
              name="microphone"
              size={24}
            />
          }
        />
      </Box>
      <ScrollView>
        <Heading
          marginTop={5}
          marginLeft={5}
          marginBottom={0}
          fontFamily="ZenKakuGothicNewBold"
        >
          Welcome, User {String.fromCodePoint(0x1f44b)}
        </Heading>
        <Text
          fontFamily="ZenKakuGothicNewRegular"
          marginLeft={5}
          marginRight={5}
          fontSize={20}
        >
          Discover our exclusive phone cases and beautify your phone
        </Text>
        <Center flex={1}>
          <Product />
        </Center>
      </ScrollView>
    </React.Fragment>
  );
}
