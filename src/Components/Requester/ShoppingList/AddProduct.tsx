import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input, Layout } from "@ui-kitten/components";

interface IProps {
  setShoppingList: (prev) => void;
}

const AddProduct = ({ setShoppingList }: IProps) => {
  const [value, setValue] = useState("");
  const addProductToList = () => {
    setShoppingList((prev) => {
      const id = Math.random()
      return [...prev, { value, id }];
    });
  };
  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Add product"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        style={styles.inputStyle}
        onBlur={() => console.log("bania")}
      />
      <Button style={styles.button} onPress={addProductToList}>
        +
      </Button>
    </Layout>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 4,
    marginRight: 8,
    borderRadius: 16,
  },
  button: {
    borderColor: "#22879d",
    backgroundColor: "#22879d",
    fontSize: 32,
    borderRadius: 16,
  },
});
