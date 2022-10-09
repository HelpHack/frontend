import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import TopBar from "src/Components/Common/TopBar";
import Face from "src/assets/old-lady.jpeg";
import ShoppingList from "src/Components/Requester/ShoppingList/ShoppingList";
import AddItem from "src/Components/Requester/ShoppingList/AddProduct";
import { Button } from "@ui-kitten/components";
import {useAppDispatch} from "src/store";
import {addTask} from "src/features/tasks/tasksSlice";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

const ShoppingListContainer = () => {
  const [shoppingList, setShoppingList] = useState<any[] | null>([]);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<StackNavigationProp<any>>()

    return (
    <View style={styles.container}>
      <TopBar name="Barbara" img={Face} />
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <AddItem setShoppingList={setShoppingList} />
      <Button onPress={() => {
        console.log({shoppingList})
        dispatch(addTask({list:shoppingList, category:'SHOPPING'}))
        setShoppingList([])
        navigation.navigate('TaskList')
      }} disabled={shoppingList.length < 1}>Approve shopping list</Button>
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
