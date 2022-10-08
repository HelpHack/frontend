import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import cardImg from "@src/assets/car.jpeg";

interface IProps {
  text: string;
}

const ChooseProfileCard = ({ text }: IProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Layout style={styles.overlay} />
      <Image source={cardImg} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ChooseProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    position: "relative",
    zIndex: 5,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 3,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
    zIndex: 4,
  },
});
