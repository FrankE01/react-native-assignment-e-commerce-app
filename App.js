import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import ProductsList from "./screens/ProductsList";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="ProductsList" component={ProductsList} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
