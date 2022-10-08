import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import TaskCard from "src/Components/Common/TaskCard/TaskCard";
import { Layout } from "@ui-kitten/components";
import { textStyles } from "src/styles/textStyles";

const ActiveTasks = () => {
  return (
    <Layout style={styles.wrapper}>
      <Text style={textStyles.sectionTitle}>Active tasks</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <TaskCard
          title="Shopping"
          details={{ start: "ul. Pomorksa 14", destination: "Kaszubska 14" }}
        />
        <TaskCard
          title="Lyft"
          details={{ start: "ul. Pomorksa 14", destination: "Kaszubska 14" }}
        />
        <TaskCard
          title="House service"
          details={{ start: "ul. Pomorksa 14", destination: "Kaszubska 14" }}
        />
      </ScrollView>
    </Layout>
  );
};

export default ActiveTasks;

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
});
