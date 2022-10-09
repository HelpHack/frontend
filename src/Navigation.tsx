import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ChooseProfile from "src/Scenes/ChooseProfile/ChooseProfile";
import MainVolunteer from "src/Scenes/Main/MainVolunteer";
import MainRequester from "src/Scenes/Requester/MainRequester";
import ShoppingHelp from "src/Scenes/Requester/ShoppingHelp";
import Shopping from "./Scenes/Volunteer/Shopping";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={ChooseProfile}
        />
        <Stack.Screen
          name="MainVolunteer"
          options={{ headerShown: false }}
          component={MainVolunteer}
        />
        <Stack.Screen
          name="MainRequester"
          options={{ headerShown: false }}
          component={MainRequester}
        />
        <Stack.Screen
          name="ShoppingHelp"
          // options={{ headerShown: false }}
          component={ShoppingHelp}
        />
        <Stack.Screen
          name="ShoppingTask"
          // options={{ headerShown: false }}
          component={Shopping}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
