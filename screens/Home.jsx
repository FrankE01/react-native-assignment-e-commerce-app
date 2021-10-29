import React from "react";
import { ImageBackground, Image, Text } from "react-native";
import { Button, Center, Box, VStack } from "native-base";
import loginbg from "../assets/images/loginbg.png";
import applogo from "../assets/images/applogo.png";
import { useFonts } from "expo-font";

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    ZenKakuGothicNew: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
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
            fontFamily: "ZenKakuGothicNew",
          }}
        >
          KROMCASE
        </Text>
      </Center>
      <VStack alignItems="center">
        <Button
          backgroundColor={styles.button.login.backgroundColor}
          style={styles.button}
          _text={{
            color: "black",
            fontSize: 25,
            fontFamily: "ZenKakuGothicNew",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          colorScheme={styles.button.signup.backgroundColor}
          style={styles.button}
          _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNew" }}
          onPress={() => navigation.navigate("Signup")}
        >
          Signup
        </Button>
      </VStack>
    </ImageBackground>
  );
}

const styles = {
  button: {
    width: 300,
    height: 50,
    margin: 7,
    borderRadius: 20,
    login: {
      backgroundColor: "white",
    },
    signup: {
      backgroundColor: "primary",
    },
  },
};
