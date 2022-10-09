import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";
import Trash from "src/assets/trash.png";

interface IProps {
  shoppingList: { value: string; id: string }[];
  setShoppingList: (shoppingList) => void;
}

const ShoppingList = ({ shoppingList, setShoppingList }: IProps) => {
  const removeItem = (id) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  };
  return (
    <ScrollView style={styles.container}>
      {shoppingList.length > 0 ? (
        shoppingList.map((item) => (
          <Layout style={styles.item} key={item.id}>
            <Text>{item.value}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Image style={styles.icon} source={Trash} />
            </TouchableOpacity>
          </Layout>
        ))
      ) : (
        <Text style={styles.noItemsText}>Add items to Your Shopping List</Text>
      )}
    </ScrollView>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  noItemsText: {
    textAlign: "center",
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 16,
  },
  item: {
    padding: 10,
    margin: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#c9dfec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
