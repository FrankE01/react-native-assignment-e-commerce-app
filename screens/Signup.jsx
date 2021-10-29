import React from "react";
import { View, Text } from "react-native";
import { Center, Button } from "native-base";

export default function Signup({ navigation }) {
  return (
    <Center flex={1} px={3}>
      <Text>Signup here!</Text>
      <Button>something here</Button>
      <Text>some text after button</Text>
    </Center>
  );
}
