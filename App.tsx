import { StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";

import { store } from "src/store";
import ChooseProfile from "src/Scenes/ChooseProfile/ChooseProfile";
import MainVolunteer from "src/Scenes/Main/MainVolunteer";
import MainRequester from "src/Scenes/Main/MainRequester";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
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
              name="MainVolunteer"
              options={{ headerShown: false }}
              component={MainVolunteer}
            />
            <Stack.Screen
              name="MainRequester"
              options={{ headerShown: false }}
              component={MainRequester}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
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
