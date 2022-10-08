import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskCard from "src/Components/Common/TaskCard";

const ActiveTasks = () => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </ScrollView>
  );
};

export default ActiveTasks;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
  },
});
