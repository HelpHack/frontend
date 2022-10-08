import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import ChooseProfile from "src/Scenes/ChooseProfile/ChooseProfile";
import Main from "src/Scenes/Main/Main";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={ChooseProfile}
            />
            <Stack.Screen
              name="Main"
              options={{ headerShown: false }}
              component={Main}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  statusBar: {
    marginBottom: 10,
  },
});
