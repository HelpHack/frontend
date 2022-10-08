import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import TopBar from "src/Components/Common/TopBar";
import RequesterCardsContainer from "src/Containers/MainRequester/RequesterCardsContainer";

const MainRequester = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <TopBar />
      <RequesterCardsContainer />
    </ScrollView>
  );
};

export default MainRequester;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
