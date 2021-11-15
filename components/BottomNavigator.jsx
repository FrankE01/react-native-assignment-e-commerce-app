import React from "react";
import { HStack, Pressable } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomNavigator({ navigation }) {
  return (
    <HStack
      padding={3}
      borderRadius={20}
      zIndex={3}
      justifyContent="space-between"
      bg="#fff"
    >
      <Pressable
        margin={3}
        onPress={() => {
          navigation.navigate("ProductsList");
        }}
      >
        <Ionicons name="home" color="black" size={24} />
      </Pressable>
      <Pressable
        margin={3}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <MaterialCommunityIcons name="cart" size={24} color="black" />
      </Pressable>
      <Pressable
        margin={3}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Ionicons name="settings" size={24} color="black" />
      </Pressable>
      <Pressable
        margin={3}
        onPress={() => {
          navigation.navigate("Account");
        }}
      >
        <MaterialCommunityIcons name="account" size={24} color="black" />
      </Pressable>
    </HStack>
  );
}
