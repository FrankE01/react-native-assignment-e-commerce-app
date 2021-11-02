import React from "react";
import { Dimensions } from "react-native";
import { Center, Image, Text, Button } from "native-base";
import ConfettiCannon from "react-native-confetti-cannon";
import { useFonts } from "expo-font";
import greencheckmark from "../assets/images/greencheckmark.png";

export default function End({ navigation }) {
  const [loaded] = useFonts({
    ZenKakuGothicNewBold: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
    ZenKakuGothicNewRegular: require("../assets/fonts/ZenKakuGothicNew-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <>
      <Center flex={1}>
        <Image source={greencheckmark} size={200} alt="greencheckmark" />
        <Text fontSize={24} fontFamily="ZenKakuGothicNewBold">
          Purchase Complete {String.fromCodePoint(0x1f389)}
        </Text>
        <Button
          width={300}
          height={50}
          margin={5}
          borderRadius={20}
          _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNewBold" }}
          onPress={() => {
            navigation.pop();
            navigation.navigate("ProductsList");
          }}
        >
          Continue Shopping
        </Button>
      </Center>
      <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fallSpeed={5000} />
      <ConfettiCannon
        count={200}
        origin={{ x: Dimensions.get("screen").width, y: 0 }}
        fallSpeed={5000}
      />
    </>
  );
}
