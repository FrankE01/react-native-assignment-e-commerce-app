import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import products from "./inventory";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import ProductsList from "./screens/ProductsList";
import Cart from "./screens/Cart";
import AppContext from "./AppContext";

const Stack = createStackNavigator();
export default function App() {
  const handleLike = (product) => {
    userSettings.allProducts.splice(product.id - 1, 1, product);
    setUserSettings({
      allProducts: userSettings.allProducts,
      handleLike,
    });
  };

  const [userSettings, setUserSettings] = useState({
    allProducts: products,
    handleLike,
  });

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="ProductsList" component={ProductsList} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
