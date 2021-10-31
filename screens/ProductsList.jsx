import React, { useEffect, useState } from "react";
import { View, BackHandler, Image, ScrollView, Text } from "react-native";
import { Button, Center, VStack, HStack, FlatList } from "native-base";
import products from "./inventory";
import { useFonts } from "expo-font";
import Product from "./Product";

export default function ProductsList({ navigation }) {
  const [icon, setIcon] = useState("heart-circle");
  const [loaded] = useFonts({
    ZenKakuGothicNew: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  // useEffect(() => {
  //   const backAction = () => {
  //     navigation.popToTop();
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );
  //   return () => backHandler.remove();
  // }, []);
  return (
    <Center flex={1}>
      <Product />
      <Button
        onPress={() => {
          navigation.navigate("Home");
          console.log(products);
        }}
      >
        Go to Home
      </Button>
    </Center>
  );
}
