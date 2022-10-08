import { StyleSheet } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import TopBar from "src/Components/Common/TopBar";
import ActiveTasks from "src/Containers/ActiveTasks/ActiveTasks";

const Main = () => {
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ActiveTasks />
      <Text>Main</Text>
    </Layout>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {},
});
