import React, { useState } from "react";
import {
  Center,
  Button,
  HStack,
  Pressable,
  Heading,
  FormControl,
  Input,
  Text,
  Box,
} from "native-base";
import { Dimensions } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function SignUp({ navigation }) {
  const [secure, setSecure] = useState(true);
  const [icon, setIcon] = useState("eye-with-line");
  const [loaded] = useFonts({
    ZenKakuGothicNewBold: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <React.Fragment>
      <HStack space={250} alignSelf="flex-start" marginTop={25}>
        <Pressable
          margin={5}
          opacity={0.75}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
      </HStack>
      <Center flex={1} px={3}>
        <Heading fontFamily="ZenKakuGothicNewBold">Create Account</Heading>
        <FormControl>
          <FormControl.Label>USERNAME OR EMAIL</FormControl.Label>
          <Input variant="underlined" style={styles.input} />
          <FormControl.Label>PASSWORD</FormControl.Label>
          <Box
            style={{
              flexDirection: "row",
            }}
          >
            <Input
              variant="underlined"
              style={{
                fontSize: 20,
                marginBottom: 30,
                borderWidth: 0,
                borderBottomWidth: 2,
                width: Dimensions.get("screen").width / 1.2,
              }}
              secureTextEntry={secure}
            />
            <Pressable
              onPress={() => {
                if (secure == false) {
                  setSecure(true);
                  setIcon("eye-with-line");
                } else {
                  setSecure(false);
                  setIcon("eye");
                }
              }}
            >
              <Entypo name={icon} size={24} color="black" />
            </Pressable>
          </Box>
        </FormControl>
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
          Log In
        </Button>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={{ color: "#42c0d2" }}>Don't have an account?</Text>
        </Pressable>
      </Center>
    </React.Fragment>
  );
}

const styles = {
  input: {
    fontSize: 20,
    marginBottom: 30,
  },
  password: {
    type: "password",
    icon: "eye-with-line",
  },
};
