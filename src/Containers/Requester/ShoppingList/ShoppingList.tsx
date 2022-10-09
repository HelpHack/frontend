import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import TopBar from "src/Components/Common/TopBar";
import Face from "src/assets/old-lady.jpeg";
import ShoppingList from "src/Components/Requester/ShoppingList/ShoppingList";
import AddItem from "src/Components/Requester/ShoppingList/AddProduct";
import { Button } from "@ui-kitten/components";

const ShoppingListContainer = () => {
  const [shoppingList, setShoppingList] = useState<any[] | null>([]);
  return (
    <View style={styles.container}>
      <TopBar name="Barbara" img={Face} />
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <AddItem setShoppingList={setShoppingList} />
      <Button onPress={() => } disabled={shoppingList.length < 1}>Approve shopping list</Button>
    </View>
  );
};

export default ShoppingListContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
