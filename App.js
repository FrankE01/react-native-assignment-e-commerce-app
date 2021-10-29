import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import ProductsList from "./screens/ProductsList";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
        <StatusBar backgroundColor="#df8d8e" />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
