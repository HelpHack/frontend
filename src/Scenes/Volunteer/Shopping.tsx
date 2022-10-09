import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const Shopping = () => {
  return (
    <View>
      <MapView style={styles.map}>Shopping</MapView>
    </View>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
