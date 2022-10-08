import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import Img from "src/assets/shopping2.jpeg";

const TaskCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={Img} />
      <Layout style={styles.overlay} />
      <Text style={styles.taskDetail}>TaskCard</Text>
      <Layout style={styles.details}>
        <Text style={styles.detailsText}>ul. Pomorska 14</Text>
        <Text style={styles.detailsText}>ul. Gubińska 10</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    position: "relative",
    borderRadius: 16,
    width: 250,
    height: 100,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: 16,
  },
  taskDetail: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  details: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  detailsText: {
    color: "white",
    fontSize: 12,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 250,
    height: 100,
    borderRadius: 16,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 250,
    height: 100,
    borderRadius: 16,
    backgroundColor: "black",
    opacity: 0.4,
  },
});
