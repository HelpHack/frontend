import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Button, Layout } from "@ui-kitten/components";

const Shopping = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.info}>
        <Text style={styles.taskTitle}>Shopping task</Text>
        <Layout style={styles.taskDetails}>
          <Text style={styles.text}>Społem Katowice</Text>
          <Text style={styles.text}>Approx time: 7:30 min</Text>
          <Text style={styles.text}>ul. Obsrana 420</Text>
          <Text style={styles.text}>ul. Zwrócona 666</Text>
        </Layout>
        <Button style={styles.navigateButton}>Navigate</Button>
      </Layout>
      <MapView
        region={{
          latitude: 50.257379,
          longitude: 19.022999,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Marker
          title="hui"
          coordinate={{ latitude: 50.257379, longitude: 19.022999 }}
        />
      </MapView>
    </Layout>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    zIndex: 1,
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  info: {
    position: "absolute",
    padding: 16,
    justifyContent: "space-between",
    zIndex: 2,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    bottom: 0,
  },
  taskDetails: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    marginBottom: 12,
  },
  navigateButton: {
    marginVertical: 8,
  },
  text: {
    color: "white",
  },
});
