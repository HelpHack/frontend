import { StyleSheet, Text } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import RequestCard from "src/Components/Requester/RequestCard";
import CarImg from "src/assets/car.jpeg";
import ShoppingImg from "src/assets/shopping2.jpeg";
import ApartmentImg from "src/assets/apartment.jpeg";

const RequesterCardsContainer = () => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>What help do You need?</Text>
      <RequestCard
        title="Shopping help"
        img={ShoppingImg}
        route="ShoppingHelp"
      />
      <RequestCard title="I need a lift" img={CarImg} route="ShoppingHelp" />
      <RequestCard
        title="Home service"
        img={ApartmentImg}
        route="ShoppingHelp"
      />
    </Layout>
  );
};

export default RequesterCardsContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
    display: "flex",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },
});
