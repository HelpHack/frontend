import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Layout, Text, Icon } from "@ui-kitten/components";
import Face from "src/assets/guy.jpeg";

const TopBar = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.personContainer}>
        <Image style={styles.image} source={Face} />
        <Layout>
          <Text>Welcome </Text>
        </Layout>
        <Layout>
          <Text style={styles.name}>XYZ</Text>
        </Layout>
      </Layout>
      <Layout style={styles.settingsContainer}></Layout>
    </Layout>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 48,
    marginRight: 8,
  },
  personContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
  },
  settingsContainer: {
    backgroundColor: "#606060",
    width: 32,
    height: 32,
    borderRadius: 36,
  },
});
