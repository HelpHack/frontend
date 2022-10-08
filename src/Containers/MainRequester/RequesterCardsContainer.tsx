import { StyleSheet, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import RequestCard from "src/Components/Requester/RequestCard";

const RequesterCardsContainer = () => {
  return (
    <Layout style={styles.container}>
      <Text>RequesterCardsContainer</Text>
      <RequestCard />
    </Layout>
  );
};

export default RequesterCardsContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});
