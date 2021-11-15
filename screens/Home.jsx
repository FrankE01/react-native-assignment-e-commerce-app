import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Image, Text } from "react-native";
import { Button, Center, Box, VStack } from "native-base";
import loginbg from "../assets/images/loginbg.png";
import applogo from "../assets/images/icon.png";

export default function Home({ navigation }) {
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
        <VStack alignItems="center">
          <Button
            backgroundColor={styles.button.logIn.backgroundColor}
            style={styles.button}
            _text={{
              color: "black",
              fontSize: 25,
              fontFamily: "ZenKakuGothicNewBold",
            }}
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          >
            Log In
          </Button>
          <Button
            colorScheme={styles.button.signUp.backgroundColor}
            style={styles.button}
            _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNewBold" }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            Sign Up
          </Button>
        </VStack>
      </ImageBackground>
      <StatusBar backgroundColor="#df8d8e" />
    </React.Fragment>
  );
}

const styles = {
  button: {
    width: 300,
    height: 50,
    margin: 7,
    borderRadius: 20,
    logIn: {
      backgroundColor: "white",
    },
    signUp: {
      backgroundColor: "primary",
    },
  },
};
