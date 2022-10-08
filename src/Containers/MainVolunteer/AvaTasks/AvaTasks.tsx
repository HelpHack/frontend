import { ScrollView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Layout, Input, Icon } from "@ui-kitten/components";
import { textStyles } from "src/styles/textStyles";
import TaskCard from "src/Components/Common/TaskCard/TaskCard";

const AvaTasks = () => {
  const [value, setValue] = useState("");
  return (
    <Layout style={styles.container}>
      <Text style={textStyles.sectionTitle}>Available volunteering</Text>
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
