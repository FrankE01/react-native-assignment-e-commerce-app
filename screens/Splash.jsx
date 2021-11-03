import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Image, Text } from "react-native";
import { Center, Box } from "native-base";
import loginbg from "../assets/images/loginbg.png";
import applogo from "../assets/images/icon.png";
import { useFonts } from "expo-font";

export default function Splash({ navigation }) {
  const [loaded] = useFonts({
    ZenKakuGothicNewBold: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
  });

  const artificialDelay = () => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  };
  if (!loaded) {
    return null;
  }
  return (
    <React.Fragment>
      <ImageBackground
        source={loginbg}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Center flex={1} px="3">
          <Box bg="#df8d8eee" borderRadius="30">
            <Image
              source={applogo}
              style={{ width: 200, height: 200, borderColor: "black" }}
            />
          </Box>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "ZenKakuGothicNewBold",
            }}
          >
            KROMCASE
          </Text>
        </Center>
      </ImageBackground>
      <StatusBar backgroundColor="#df8d8e" />
      {artificialDelay()}
    </React.Fragment>
  );
}
