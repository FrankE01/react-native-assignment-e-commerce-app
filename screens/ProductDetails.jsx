import React, { useState, useContext } from "react";
import { Dimensions } from "react-native";
import {
  Center,
  Text,
  HStack,
  Pressable,
  Heading,
  Divider,
  Select,
  VStack,
  Button,
  ScrollView,
  CheckIcon,
  useToast,
} from "native-base";
import { Image } from "react-native";
import Reviews from "../components/Reviews";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppContext from "../AppContext";

export default function ProductDetails({ route, navigation }) {
  const { smartphones, cart, addCart } = useContext(AppContext);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const toast = useToast();

  const ButtonText = () => {
    if (!cart.includes(route.params.item)) {
      return (
        <Text fontSize={25} fontFamily="ZenKakuGothicNewBold" color="#fff">
          Add to Cart
        </Text>
      );
    } else {
      return (
        <Text fontSize={25} fontFamily="ZenKakuGothicNewBold" color="#fff">
          Remove from Cart
        </Text>
      );
    }
  };

  const Model = () => {
    if (brand != "") {
      return (
        <VStack>
          <Select
            placeholder="Choose Model..."
            accessibilityLabel="Choose Model"
            selectedValue={model}
            onValueChange={(itemValue) => {
              setModel(itemValue);
            }}
            bg="#fff"
            _selectedItem={{
              bg: "#df8d8e",
              endIcon: <CheckIcon size={5} />,
            }}
          >
            {smartphones[brand].map((model) => {
              return (
                <Select.Item
                  key={model}
                  label={model}
                  value={model}
                  _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
                />
              );
            })}
          </Select>
        </VStack>
      );
    }
    return null;
  };
  return (
    <>
      <HStack
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width={Dimensions.get("screen").width}
        marginTop={39}
        paddingTop={5}
        alignSelf="center"
        alignContent="space-between"
      >
        <Pressable
          opacity={0.9}
          onPress={() => {
            navigation.goBack();
          }}
          marginLeft={2}
          flex={1}
          flexDirection="row"
          alignItems="baseline"
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Heading marginLeft={1} fontFamily="ZenKakuGothicNewBold">
            Details
          </Heading>
        </Pressable>
      </HStack>
      <ScrollView>
        <Center flex={0}>
          <Image
            source={route.params.item.thumb}
            style={{ borderTopLeftRadius: 75, borderTopRightRadius: 75 }}
            alt={route.params.item.id}
          />
        </Center>
        <Divider
          width={Dimensions.get("screen").width}
          alignSelf="center"
          bg="#000"
        />
        <VStack margin={5}>
          <Heading fontFamily="ZenKakuGothicNewBold">
            {route.params.item.name}
          </Heading>
          <HStack>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={24}>
              Price:
            </Text>
            <Text
              color="#4ecd94"
              fontFamily="ZenKakuGothicNewBold"
              fontSize={24}
            >
              {" " + route.params.item.price}
            </Text>
          </HStack>
          <VStack>
            <Select
              placeholder="Choose Phone Brand..."
              accessibilityLabel="Choose Phone Brand"
              selectedValue={brand}
              onValueChange={(itemValue) => {
                setBrand(itemValue);
              }}
              bg="#fff"
              _selectedItem={{
                bg: "#df8d8e",
                endIcon: <CheckIcon size={5} />,
              }}
              _placeholder={{ fontFamily: "ZenKakuGothicNewBold" }}
            >
              {Object.keys(smartphones).map((phone) => {
                return (
                  <Select.Item
                    key={phone}
                    label={phone}
                    value={phone}
                    _text={{ fontFamily: "ZenKakuGothicNewBold" }}
                  />
                );
              })}
            </Select>
          </VStack>
          <Model />
        </VStack>
        <Divider
          width={Dimensions.get("screen").width}
          alignSelf="center"
          bg="#000"
        />
        <Reviews />
      </ScrollView>
      <HStack
        justifyContent="space-between"
        marginLeft={30}
        marginRight={30}
        marginTop={2}
        marginBottom={2}
      >
        <Button
          height={50}
          width={230}
          borderRadius={10}
          _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNewBold" }}
          onPress={() => {
            if (brand == "" || model == "") {
              toast.show({
                title: "Brand and Model Required",
                status: "danger",
                description: "You need to select a brand and model",
              });
            } else {
              route.params.item.phone = brand + " " + model;
              addCart(route.params.item);
            }
          }}
        >
          <ButtonText />
        </Button>
        <Button
          bg="#df8d8e"
          size={8}
          shadow={3}
          height={50}
          width={60}
          borderRadius={10}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <MaterialCommunityIcons
            name={cart.length != 0 ? "cart-arrow-right" : "cart"}
            size={30}
            color="black"
          />
        </Button>
      </HStack>
    </>
  );
}
