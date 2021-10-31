import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { VStack, HStack, FlatList } from "native-base";
import products from "./inventory";
import LikeButton from "./LikeButton";

export default function Product(props) {
  const [icon, setIcon] = useState("heart-circle");
  const [favorite, setFavorite] = useState(false);

  return (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "space-between",
        marginTop: 30,
      }}
      data={products}
      renderItem={({ item }) => {
        return (
          <VStack margin={2}>
            <Image
              source={item.thumb}
              style={{ width: 190, height: 300, borderRadius: 30, zIndex: 2 }}
            />
            <View
              style={{
                top: -20,
                width: 190,
                height: 80,
                backgroundColor: "#d3d3d3",
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
              }}
            >
              <VStack>
                <Text
                  style={{
                    marginTop: 20,
                    marginLeft: 12,
                    fontSize: 20,
                    fontFamily: "ZenKakuGothicNew",
                  }}
                >
                  {item.name}
                </Text>
                <HStack space={20} alignSelf="center">
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 20,
                      fontFamily: "ZenKakuGothicNew",
                    }}
                  >
                    {item.price}
                  </Text>
                  <LikeButton item={item} />
                </HStack>
              </VStack>
            </View>
          </VStack>
        );
      }}
      keyExtractor={(item) => item.id}
      extraData={null}
      numColumns={2}
    />
  );
}
