import { ScrollView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import TopBar from "src/Components/Common/TopBar";
import ActiveTasks from "src/Containers/MainVolunteer/ActiveTasks/ActiveTasks";
import AvaTasks from "src/Containers/MainVolunteer/AvaTasks/AvaTasks";
import Face from "src/assets/guy.jpeg";

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <TopBar name="David" img={Face} />
      <ActiveTasks />
      <AvaTasks />
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
