import React from "react";
import { VStack, HStack, Heading, Box, Text } from "native-base";

export default function Reviews() {
  return (
    <VStack padding={5}>
      <Heading fontFamily="ZenKakuGothicNewBold">Reviews</Heading>
      <Box
        padding={0.5}
        margin={0.5}
        borderWidth={1.5}
        borderColor="#000"
        borderRadius={10}
        bg="#fff"
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text margin={1} fontSize={20}>
            Tony Stark
          </Text>
          <Text fontSize={12}>3 days ago</Text>
        </HStack>
        <Text fontSize={17} fontFamily="ZenKakuGothicNewRegular">
          Donec id elit non mi porta gracida at eget metus. Maecenas sed diam
          eget risus varius blandit. Hello Jarvis!
        </Text>
        <Text color="#919191" margin={2} fontSize={14}>
          Iron Man, Marvel Inc.
        </Text>
      </Box>
      <Box
        padding={0.5}
        margin={0.5}
        borderWidth={1.5}
        borderColor="#000"
        borderRadius={10}
        bg="#fff"
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text margin={1} fontSize={20}>
            Bruce Banner
          </Text>
          <Text fontSize={12}>6 days ago</Text>
        </HStack>
        <Text fontSize={17} fontFamily="ZenKakuGothicNewRegular">
          Donec id elit non mi porta gracida at eget metus. Maecenas sed diam
          eget risus varius blandit. Hulk Smash!
        </Text>
        <Text color="#919191" margin={2} fontSize={14}>
          Hulk, Marvel Inc.
        </Text>
      </Box>
      <Box
        padding={0.5}
        margin={0.5}
        borderWidth={1.5}
        borderColor="#000"
        borderRadius={10}
        bg="#fff"
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text margin={1} fontSize={20}>
            Thor Odinson of Asgard
          </Text>
          <Text fontSize={12}>9 days ago</Text>
        </HStack>
        <Text fontSize={17} fontFamily="ZenKakuGothicNewRegular">
          Donec id elit non mi porta gracida at eget metus. Maecenas sed diam
          eget risus varius blandit. Mjölnir!
        </Text>
        <Text color="#919191" margin={2} fontSize={14}>
          Thor, Marvel Inc.
        </Text>
      </Box>
    </VStack>
  );
}
