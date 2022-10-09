import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";

interface IProps {
  details: {
    start: string;
    destination: string;
  };
}

const Details = ({ details }: IProps) => {
  return (
    <Layout style={styles.details}>
      <Text style={styles.detailsText}>{details.start}</Text>
      <Text style={styles.detailsText}>{details.destination}</Text>
    </Layout>
  );
};

export default Details;

const styles = StyleSheet.create({
  details: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  detailsText: {
    color: "white",
    fontSize: 12,
  },
});
