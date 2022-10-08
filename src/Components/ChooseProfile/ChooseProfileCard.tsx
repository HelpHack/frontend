import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "src/types/routeTypes";

interface IProps {
  text: string;
  img: ImageSourcePropType;
  route: string;
  color: string;
}

const ChooseProfileCard = ({ text, img, route, color }: IProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(route, {})}
    >
      <Text style={styles.text}>{text}</Text>
      <Layout style={styles.overlay} />
      <Image source={img} style={styles.image} />
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
    backgroundColor: "#292851",
    opacity: 0.5,
    zIndex: 4,
  },
});
