import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import ShoppingImg from "src/assets/shopping2.jpeg";
import CarImg from "src/assets/car.jpeg";
import ApartmentImg from "src/assets/apartment.jpeg";

import Details from "./Details";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
  title: string;
  details: {
    start: string;
    destination: string;
  };
  route?: string;
  task: object;
}

const TaskCard = ({ title, details, route, task }: IProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const displayImg = (title) => {
    switch (title) {
      case "Shopping":
        return ShoppingImg;
      case "Lift":
        return CarImg;
      default:
        return ApartmentImg;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (route ? navigation.navigate(route, { task }) : null)}
    >
      <Image style={styles.image} source={displayImg(title)} />
      <Text style={styles.taskTitle}>{title}</Text>
      <Details details={details} />
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    position: "relative",
    borderRadius: 16,
    display: "flex",
    justifyContent: "space-between",
    minWidth: 250,
    height: 120,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  taskTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "auto",
    height: "auto",
    borderRadius: 16,
  },
});
