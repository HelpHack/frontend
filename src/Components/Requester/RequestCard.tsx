import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface IProps {
  title: string;
  img: ImageSourcePropType;
}

const RequestCard = ({ title, img }: IProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginVertical: 6,
    borderRadius: 16,
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});
