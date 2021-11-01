import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Pressable, Button } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LikeButton({ item, onLike }) {
  return (
    <Pressable
      bg={styles.pressable.colorScheme}
      size={8}
      shadow={3}
      borderRadius={10}
      onPress={() => {
        if (item.icon == "cart-plus" && item.favorite == false) {
          item.icon = "cart-minus";
          item.favorite = true;
        } else {
          item.icon = "cart-plus";
          item.favorite = false;
        }
        onLike(item);
      }}
    >
      <MaterialCommunityIcons name={item.icon} size={30} color="black" />
    </Pressable>
  );
}

const styles = {
  pressable: {
    colorScheme: "#df8d8e",
  },
};
