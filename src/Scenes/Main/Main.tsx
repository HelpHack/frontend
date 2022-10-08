import { StyleSheet } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import TopBar from "src/Components/Common/TopBar";

const Main = () => {
  return (
    <Layout>
      <TopBar />
      <Text>Main</Text>
    </Layout>
  );
};

export default Main;

const styles = StyleSheet.create({});
