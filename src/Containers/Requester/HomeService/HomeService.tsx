import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input, Layout } from "@ui-kitten/components";

const HomeServiceContainer = () => {
  const [value, setValue] = useState("");
  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Describe"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        style={styles.inputStyle}
        onBlur={() => console.log("bania")}
        multiline={true}
        numberOfLines={4}
      />
      <Button style={styles.button}>Submit Your Need</Button>
    </Layout>
  );
};

export default HomeServiceContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    display: "flex",
  },
  inputStyle: {
    marginVertical: 8,
  },
  button: {},
});
