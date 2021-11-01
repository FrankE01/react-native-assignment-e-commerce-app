import React, { useContext } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { VStack, HStack, FlatList } from "native-base";
import { useFonts } from "expo-font";
import LikeButton from "./LikeButton";
import AppContext from "../AppContext";

export default function Product() {
  const { allProducts: products, handleLike } = useContext(AppContext);
  const [loaded] = useFonts({
    ZenKakuGothicNewBold: require("../assets/fonts/ZenKakuGothicNew-Bold.ttf"),
    ZenKakuGothicNewRegular: require("../assets/fonts/ZenKakuGothicNew-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const renderItem = ({ item }) => {
    return (
      <VStack margin={1}>
        <Image
          source={item.thumb}
          style={{
            width: Dimensions.get("screen").width / 2.2,
            height: Dimensions.get("screen").height / 2.8,
            borderRadius: 30,
            zIndex: 2,
          }}
        />
        <View
          style={{
            top: -23,
            width: Dimensions.get("screen").width / 2.2,
            height: Dimensions.get("screen").height / 10,
            backgroundColor: "#e8e8e8",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <VStack>
            <Text
              style={{
                marginTop: 22,
                marginLeft: 12,
                fontSize: 20,
                fontFamily: "ZenKakuGothicNewRegular",
              }}
            >
              {item.name}
            </Text>
            <HStack
              space={Dimensions.get("screen").width / 6}
              alignSelf="center"
            >
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 20,
                  fontFamily: "ZenKakuGothicNewBold",
                }}
              >
                {item.price}
              </Text>
              <LikeButton item={item} onLike={handleLike} />
            </HStack>
          </VStack>
        </View>
      </VStack>
    );
  };
  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={null}
      numColumns={2}
      contentContainerStyle={{
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "space-between",
        marginTop: 30,
      }}
    />
  );
}