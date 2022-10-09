import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@ui-kitten/components";

const Destination = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      placeholder="Enter destination address"
      value={value}
      onChangeText={(nextValue) => setValue(nextValue)}
      style={styles.inputStyle}
      onBlur={() => console.log("bania")}
    />
  );
};

export default Destination;

const styles = StyleSheet.create({
  inputStyle: {},
});
