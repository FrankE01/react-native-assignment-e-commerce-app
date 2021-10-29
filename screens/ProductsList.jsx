import React from "react";
import { View } from "react-native";
import { Box, Button } from "native-base";

export default function ProductsList({ navigation }) {
  return (
    <View>
      <Box>Hello, World!</Box>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
    </View>
  );
}
