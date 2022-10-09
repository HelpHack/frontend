import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import TaskCard from "src/Components/Common/TaskCard/TaskCard";
import { Layout } from "@ui-kitten/components";
import { textStyles } from "src/styles/textStyles";

const categoryMap = {
    SHOPPING: 'Shopping',
    LIFT: 'Lift',
    SERVICES: 'Services'
}

const ActiveTasks = ({tasks}: {tasks:any[]}) => {
  return (
    <Layout style={styles.wrapper}>
      <Text style={textStyles.sectionTitle}>Active tasks</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {tasks.map(task => (
            <TaskCard
                title={categoryMap[task.category]}
                details={{ start: "ul. Pomorksa 14", destination: task.address }}
                route="ShoppingTask"
                task={task}
            />
        ))}
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
