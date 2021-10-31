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
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function SignUp({ navigation }) {
  const [secure, setSecure] = useState(true);
  const [icon, setIcon] = useState("eye-with-line");
  const [loaded] = useFonts({
    ZenKakuGothicNew: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
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
          <FontAwesome5 name="less-than" size={24} color="black" />
        </Pressable>
      </HStack>
      <Center flex={1} px={3}>
        <Heading fontFamily="ZenKakuGothicNew">Create Account</Heading>
        <FormControl>
          <FormControl.Label>USERNAME OR EMAIL</FormControl.Label>
          <Input style={styles.input} />
          <FormControl.Label>PASSWORD</FormControl.Label>
          <Box
            style={{
              flexDirection: "row",
            }}
          >
            <Input
              style={{
                fontSize: 20,
                marginBottom: 30,
                borderWidth: 0,
                borderBottomWidth: 2,
                width: 350,
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
          _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNew" }}
          onPress={() => {
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
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  password: {
    type: "password",
    icon: "eye-with-line",
  },
};
