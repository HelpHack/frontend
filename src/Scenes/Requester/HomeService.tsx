import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "src/Components/Common/TopBar";
import Face from "src/assets/old-lady.jpeg";
import HomeServiceContainer from "src/Containers/Requester/HomeService/HomeService";

const HomeService = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopBar name="Barbara" img={Face} />
      <Text style={styles.title}>Describe service You need</Text>
      <HomeServiceContainer />
    </View>
  );
};

export default HomeService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
  },
});
