import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Pressable,
  Text,
  VStack,
  Divider,
  AlertDialog,
  Button,
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const Credits = () => {
    return (
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Credits</AlertDialog.Header>
          <AlertDialog.Body>
            {"This app was single-handedly designed and developed by the world's greatest programmer (very soon), Francis Echesi. \nPlease give me extra credits " +
              String.fromCodePoint("0x1f97a") +
              String.fromCodePoint("0x1f64f") +
              "\n\nDonate to developer: +233 55 115 3279"}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="primary" onPress={onClose}>
              Close
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    );
  };
  return (
    <>
      <React.Fragment>
        <StatusBar backgroundColor="#df8d8e" />
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
              Settings
            </Heading>
          </Pressable>
        </HStack>
        <VStack>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              console.log("t n c tapped");
              Linking.openURL("https://expo.dev/privacy").catch((err) =>
                console.log("Cannot load page", err)
              );
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Terms and Privacy Policy
            </Text>
          </Pressable>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              console.log("contact us tapped");
              Linking.openURL("mailto:krombase1@gmail.com").catch((err) =>
                console.log("Cannot load page", err)
              );
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Contact Us
            </Text>
          </Pressable>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              console.log("Check for updates tapped");
              Linking.openURL(
                "https://github.com/FrankE01/react-native-assignment-e-commerce-app"
              ).catch((err) => console.log("Cannot load page", err));
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Check for updates
            </Text>
          </Pressable>
          <Divider />
          <HStack margin={5} justifyContent="space-between">
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              App Version
            </Text>
            <Text fontFamily="ZenKakuGothicNewRegular" fontSize={16}>
              v1.0.0
            </Text>
          </HStack>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              console.log("source code tapped");
              Linking.openURL(
                "https://github.com/FrankE01/react-native-assignment-e-commerce-app"
              ).catch((err) => console.log("Cannot load page", err));
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              View Source Code
            </Text>
          </Pressable>
          <Divider />
          <Pressable
            margin={5}
            width={Dimensions.get("screen").width}
            onPress={() => {
              console.log("credits tapped");
              setIsOpen(!isOpen);
            }}
          >
            <Text fontFamily="ZenKakuGothicNewBold" fontSize={16}>
              Credits
            </Text>
          </Pressable>
          <Divider />
        </VStack>
        <Credits />
      </React.Fragment>
      <Box margin={7}></Box>
    </>
  );
}
