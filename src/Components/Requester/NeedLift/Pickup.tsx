import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@ui-kitten/components";

const Pickup = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      placeholder="Enter pickup place"
      value={value}
      onChangeText={(nextValue) => setValue(nextValue)}
      style={styles.inputStyle}
      onBlur={() => console.log("bania")}
    />
  );
};

export default Pickup;

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 8,
  },
});
