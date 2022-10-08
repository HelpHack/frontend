import React from "react";
import { StyleSheet } from "react-native";

import { Layout, Text } from "@ui-kitten/components";
import ChooseProfileCard from "../../Components/ChooseProfile/ChooseProfileCard";

const ChooseProfile = () => {
  return (
    <Layout style={styles.container}>
      <ChooseProfileCard text="I Want Help" />
      <ChooseProfileCard text="I Can Help" />
    </Layout>
  );
};

export default ChooseProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
