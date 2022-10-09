import { ScrollView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Layout, Input, Icon } from "@ui-kitten/components";
import { textStyles } from "src/styles/textStyles";
import TaskCard from "src/Components/Common/TaskCard/TaskCard";

const categoryMap = {
    SHOPPING: 'Shopping',
    LIFT: 'Lift',
    SERVICES: 'Services'
}

const AvaTasks = ({tasks}:any) => {
  const [value, setValue] = useState("");
  return (
    <Layout style={styles.container}>
      <Text style={textStyles.sectionTitle}>Available volunteering</Text>
        {tasks.map(task => (
            <TaskCard
                title={categoryMap[task.category]}
                details={{ start: "ul. Pomorksa 14", destination: task.address }}
                route="ShoppingTask"
            />
        ))}
      <Input
        placeholder="Search for volunteering"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        style={styles.inputStyle}
      />
    </Layout>
  );
};

export default AvaTasks;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  inputStyle: {
    marginHorizontal: 8,
    marginBottom: 16,
  },
});
