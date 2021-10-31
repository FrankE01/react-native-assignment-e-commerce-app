import React, { useState } from "react";
import { Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function LikeButton(props) {
  const [icon, setIcon] = useState(props.item.icon);
  const [favorite, setFavorite] = useState(props.item.favorite);

  return (
    <Pressable
      onPress={() => {
        if (icon == "heart-circle-outline" && favorite == true) {
          setIcon("heart-circle");
          setFavorite(false);
        } else {
          setIcon("heart-circle-outline");
          setFavorite(true);
        }
        props.item.icon = icon;
        props.item.favorite = favorite;
        console.log(icon, props.item.favorite);
      }}
    >
      <Ionicons name={icon} size={40} color="black" style={{ margin: -10 }} />
    </Pressable>
  );
}
