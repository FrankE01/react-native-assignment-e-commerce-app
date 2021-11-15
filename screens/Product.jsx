import React, { useContext } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { VStack, HStack, FlatList, Pressable } from "native-base";
import AppContext from "../AppContext";

export default function Product({ handleNavigation }) {
  const { allProducts: products } = useContext(AppContext);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          handleNavigation(item);
        }}
      >
        <VStack margin={1}>
          <Image
            source={item.thumb}
            style={{
              width: Dimensions.get("screen").width / 2.2,
              height: Dimensions.get("screen").height / 2.8,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
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
                  textAlign: "center",
                  marginTop: 30,
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
                    color: "#4ecd94",
                  }}
                >
                  {item.price}
                </Text>
              </HStack>
            </VStack>
          </View>
        </VStack>
      </Pressable>
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
