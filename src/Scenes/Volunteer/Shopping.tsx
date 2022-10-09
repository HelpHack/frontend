import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Button, Layout } from "@ui-kitten/components";
import { useSelector } from "react-redux";

const Shopping = ({ route }: { route: object }) => {
  const { task } = route.params;
  const { startLocation } = useSelector((state: any) => state.taskSlice);
  if (!startLocation) return null;
  return (
    <Layout style={styles.container}>
      <Layout style={styles.info}>
        <Text style={styles.taskTitle}>{task.category}</Text>
        <Layout style={styles.taskDetails}>
          <Text style={styles.text}>{task.address}</Text>
          <Text style={styles.text}>Approx time: 7:32 min</Text>
        </Layout>
        <Button style={styles.navigateButton}>Navigate</Button>
      </Layout>
      <MapView
        region={{
          latitude: task.destination.lat,
          longitude: task.destination.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Marker
          title="You are here"
          coordinate={{
            latitude: task.destination.lat,
            longitude: task.destination.lng,
          }}
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
