import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  HStack,
  Pressable,
  Text,
  Button,
  Input,
  FormControl,
  Center,
  Heading,
  Box,
  ScrollView,
  Checkbox,
} from "native-base";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Checkout({ route, navigation }) {
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
          Checkout
        </Text>
        <Text paddingLeft={5}></Text>
      </HStack>
      <ScrollView>
        <Center flex={1} px={3} marginTop={5}>
          <Heading fontFamily="ZenKakuGothicNewBold">Payment Details</Heading>
          <FormControl>
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              CARD NUMBER
            </FormControl.Label>
            <Input
              variant="underlined"
              keyboardType="numbers-and-punctuation"
              style={styles.input}
            />
            <HStack
              justifyContent="space-between"
              marginLeft={5}
              marginRight={5}
            >
              <Box>
                <FormControl.Label
                  _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
                >
                  EXPIRY DATE
                </FormControl.Label>
                <Input
                  variant="underlined"
                  keyboardType="numbers-and-punctuation"
                  style={styles.input}
                />
              </Box>
              <Box>
                <FormControl.Label
                  _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
                >
                  SECURITY CODE
                </FormControl.Label>
                <Input
                  variant="underlined"
                  keyboardType="number-pad"
                  style={styles.input}
                />
              </Box>
            </HStack>
            <HStack
              justifyContent="space-between"
              marginLeft={5}
              marginRight={5}
            >
              <Box>
                <FormControl.Label
                  _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
                >
                  FIRST NAME
                </FormControl.Label>
                <Input
                  variant="underlined"
                  keyboardType="default"
                  style={styles.input}
                />
              </Box>
              <Box>
                <FormControl.Label
                  _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
                >
                  LAST NAME
                </FormControl.Label>
                <Input
                  variant="underlined"
                  keyboardType="default"
                  style={styles.input}
                />
              </Box>
            </HStack>
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              STREET ADDRESS
            </FormControl.Label>
            <Input variant="underlined" style={styles.input} />
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              APT./STE./BLDG.
            </FormControl.Label>
            <Input variant="underlined" style={styles.input} />
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              CITY
            </FormControl.Label>
            <Input variant="underlined" style={styles.input} />
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              STATE
            </FormControl.Label>
            <Input variant="underlined" style={styles.input} />
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              ZIP CODE
            </FormControl.Label>
            <Input
              variant="underlined"
              keyboardType="numeric"
              style={styles.input}
            />
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              PHONE
            </FormControl.Label>
            <Input
              variant="underlined"
              keyboardType="phone-pad"
              style={styles.input}
            />
            <FormControl.Label
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              EMAIL
            </FormControl.Label>
            <Input
              variant="underlined"
              keyboardType="email-address"
              style={styles.input}
            />
            <Checkbox
              defaultIsChecked
              accessibilityLabel="Choose whether to ship to billing address"
              _text={{ fontFamily: "ZenKakuGothicNewRegular" }}
            >
              Ship to billing address
            </Checkbox>
          </FormControl>
          <Box>
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
                {"$" + route.params.amount + ".00"}
              </Text>
            </HStack>
            <Button
              width={300}
              height={50}
              margin={5}
              borderRadius={20}
              _text={{ fontSize: 25, fontFamily: "ZenKakuGothicNewBold" }}
              onPress={() => {
                navigation.navigate("End");
              }}
            >
              Pay
            </Button>
          </Box>
        </Center>
      </ScrollView>
    </React.Fragment>
  );
}

const styles = {
  input: {
    fontSize: 20,
    marginBottom: 30,
  },
};
