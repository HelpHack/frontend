import React from "react";
import { StyleSheet } from "react-native";

import { Layout, Text } from "@ui-kitten/components";
import ChooseProfileCard from "src/Components/ChooseProfile/ChooseProfileCard";
import Helper from "src/assets/helping-hand.jpeg";
import VolunteerNeeded from "src/assets/Cards/volunteer-needed.jpeg";

const ChooseProfile = () => {
  return (
    <Layout style={styles.container}>
      <ChooseProfileCard
        text="I Want Help"
        img={VolunteerNeeded}
        route="MainRequester"
      />
      <ChooseProfileCard text="I Can Help" img={Helper} route="MainVolunteer" />
    </Layout>
  );
};

export default ChooseProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
