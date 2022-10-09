import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import TopBar from "src/Components/Common/TopBar";
import RequesterCardsContainer from "src/Containers/Requester/Main/RequesterCardsContainer";
import Face from "src/assets/old-lady.jpeg";

const MainRequester = () => {
  return (
    <Layout style={styles.container}>
      <StatusBar />
      <TopBar name="Barbara" img={Face} />
      <RequesterCardsContainer />
    </Layout>
  );
};

export default MainRequester;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    display: "flex",
  },
});
