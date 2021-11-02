import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image } from "react-native";
import {
  Pressable,
  HStack,
  VStack,
  Text,
  FlatList,
  Box,
  Input,
  Button,
  Center,
  Divider,
  useToast,
} from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import AppContext from "../AppContext";

export default function Cart({ navigation }) {
  const { allProducts, handleLike: onLike } = useContext(AppContext);
  let sub = 0;
  let discount = 10;
  const likedProducts = allProducts.filter((product) => {
    return product.favorite == true;
  });
  likedProducts.map((item) => {
    sub += parseInt(item.price.split(".")[0].substr(1)) * parseInt(item.order);
  });
  const [subtotal, setSubtotal] = useState(sub);
  const toast = useToast();

  const renderItem = ({ item }) => {
    return (
      <HStack
        flex={1}
        flexDirection="row"
        bg="#e8e8e8"
        margin={3}
        borderRadius={10}
        padding={3}
      >
        <Image
          source={item.thumb}
          style={{ width: 50, height: 70 }}
          alt={item.id}
          borderRadius={10}
        />

        <VStack flex={1} justifyContent="space-between" marginLeft={3}>
          <Text fontFamily={"ZenKakuGothicNewRegular"} fontSize={17}>
            {item.name}
          </Text>
          <Text fontFamily={"ZenKakuGothicNewBold"} fontSize={22} color="#000">
            {item.price}
          </Text>
        </VStack>
        <VStack flex={1} alignItems="flex-end" justifyContent="space-between">
          <Pressable
            onPress={() => {
              item.icon = "cart-plus";
              item.favorite = false;
              onLike(item);
              sub = 0;
              likedProducts.map((item) => {
                sub +=
                  parseInt(item.price.split(".")[0].substr(1)) *
                  parseInt(item.order);
              });
              setSubtotal(sub);
            }}
          >
            <MaterialIcons name="cancel" color="#df8d8e" size={20} />
          </Pressable>
          <Box
            flexDirection="row"
            alignItems="center"
            borderColor="#df8d8e"
            borderRadius={5}
            bg="#fff"
          >
            <Button
              bg="#df8d8e"
              size={6}
              borderBottomRightRadius={0}
              borderTopRightRadius={0}
              onPress={() => {
                let v = parseInt(item.order);
                if (v > 0) v--;
                item.order = v.toString();
                onLike(item);
                sub = 0;
                likedProducts.map((item) => {
                  sub +=
                    parseInt(item.price.split(".")[0].substr(1)) *
                    parseInt(item.order);
                });
                setSubtotal(sub);
              }}
            >
              <Ionicons name="remove" color="#fff" size={20} />
            </Button>
            <Input
              size={6}
              padding={0}
              paddingLeft={1}
              paddingRight={1}
              borderColor="#df8d8e"
              borderWidth={0}
              keyboardType="numeric"
              value={item.order}
              isReadOnly
            />
            <Button
              bg="#df8d8e"
              size={6}
              borderBottomLeftRadius={0}
              borderTopLeftRadius={0}
              onPress={() => {
                let v = parseInt(item.order);
                v++;
                item.order = v.toString();
                onLike(item);
                sub = 0;
                likedProducts.map((item) => {
                  sub +=
                    parseInt(item.price.split(".")[0].substr(1)) *
                    parseInt(item.order);
                });
                setSubtotal(sub);
              }}
            >
              <Ionicons name="add" color="#fff" size={20} />
            </Button>
          </Box>
        </VStack>
      </HStack>
    );
  };

  const List = () => {
    if (likedProducts.length === 0) {
      return (
        <Center flex={1}>
          <Text fontSize={24} fontFamily="ZenKakuGothicNewBold">
            Your cart is empty {String.fromCodePoint(0x1f622)}
          </Text>
          <Text fontSize={18} fontFamily="ZenKakuGothicNewRegular">
            Go back and start shopping now {String.fromCodePoint(0x1f6d2)}
          </Text>
        </Center>
      );
    }
    return (
      <>
        {/* <ScrollView> */}
        <FlatList
          keyboardDismissMode="on-drag"
          data={likedProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={null}
          contentContainerStyle={{
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        />
        {/* </ScrollView> */}
        <Box bg="#e8e8e8" borderTopLeftRadius={40} borderTopRightRadius={40}>
          <Input
            placeholder="Promo Code"
            py="2"
            px="2"
            margin={8}
            bg="#fff"
            fontSize={20}
            borderWidth={0}
            borderRadius={10}
            InputRightElement={
              <Button
                bg="#d78d8e"
                _text={{ color: "#fff" }}
                margin={2}
                onPress={() => {
                  toast.show({
                    title: "Promo Code Applied",
                    status: "success",
                    description: "Discount + $0.00",
                  });
                }}
              >
                Apply
              </Button>
            }
          />
          <VStack>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              width={Dimensions.get("screen").width}
              padding={2}
              alignSelf="center"
            >
              <Text fontSize={20} fontFamily="ZenKakuGothicNewRegular">
                Subtotal:
              </Text>
              {setSubtotal(sub)}
              <Text fontSize={20} fontFamily="ZenKakuGothicNewBold">
                {"$" + subtotal + ".00"}
              </Text>
            </HStack>
            <Divider
              width={Dimensions.get("screen").width / 1.2}
              alignSelf="center"
              bg="#000"
            />
            <HStack
              justifyContent="space-between"
              alignItems="center"
              width={Dimensions.get("screen").width}
              padding={2}
              alignSelf="center"
            >
              <Text fontSize={20} fontFamily="ZenKakuGothicNewRegular">
                {"Discount & Shipping"}:
              </Text>
              <Text fontSize={20} fontFamily="ZenKakuGothicNewBold">
                {"-$" + discount + ".00"}
              </Text>
            </HStack>
            <Divider
              width={Dimensions.get("screen").width / 1.2}
              alignSelf="center"
              bg="#000"
            />
            <HStack
              justifyContent="space-between"
              alignItems="center"
              width={Dimensions.get("screen").width}
              padding={2}
              alignSelf="center"
            >
              <Text fontSize={20} fontFamily="ZenKakuGothicNewBold">
                Amount to pay:
              </Text>
              <Text fontSize={20} fontFamily="ZenKakuGothicNewBold">
                {"$" + (subtotal - discount) + ".00"}
              </Text>
            </HStack>
            <Button
              width={300}
              height={50}
              margin={5}
              borderRadius={20}
              _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNewBold" }}
              onPress={() => {
                navigation.navigate("Checkout", {
                  amount: subtotal - discount,
                });
              }}
            >
              Proceed to Checkout
            </Button>
          </VStack>
        </Box>
      </>
    );
  };
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#df8d8e" />
      <HStack
        bg="#df8d8e"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width={Dimensions.get("screen").width}
        marginTop={39}
        paddingTop={5}
        alignSelf="center"
        alignContent="space-between"
        borderBottomRightRadius={30}
        borderBottomLeftRadius={30}
      >
        <Pressable
          opacity={0.75}
          onPress={() => {
            navigation.goBack();
          }}
          marginLeft={2}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text fontFamily="ZenKakuGothicNewBold" fontSize={24}>
          My Cart
        </Text>
        <Pressable opacity={0.75} marginRight={2}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
        </Pressable>
      </HStack>
      <List />
    </React.Fragment>
  );
}
