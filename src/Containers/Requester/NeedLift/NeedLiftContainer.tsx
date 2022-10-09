import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Destination from "src/Components/Requester/NeedLift/Destination";
import Pickup from "src/Components/Requester/NeedLift/Pickup";
import { Button } from "@ui-kitten/components";

const NeedLiftContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>I Need Lift</Text>
      <Pickup />
      <Destination />
      <Button style={styles.button}>Call for a ride</Button>
    </View>
  );
};

export default NeedLiftContainer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
  },
});
