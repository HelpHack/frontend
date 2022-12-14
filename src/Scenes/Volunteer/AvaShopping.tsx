import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Button, Layout } from "@ui-kitten/components";
import { useSelector } from "react-redux";

const AvaShopping = () => {
  const { startLocation } = useSelector((state: any) => state.taskSlice);
  if (!startLocation) return null;
  return (
    <Layout style={styles.container}>
      <Layout style={styles.info}>
        <Text style={styles.taskTitle}>Shopping task</Text>
        <Layout style={styles.taskDetails}>
          <Text style={styles.text}>Społem Katowice</Text>
          <Text style={styles.text}>Approx time: 7:30 min</Text>
          <Text style={styles.text}>ul. Pomorksa 13</Text>
          <Text style={styles.text}>ul. Gajowa 2</Text>
        </Layout>
      </Layout>
      <MapView
        region={{
          latitude: +startLocation.lat,
          longitude: +startLocation.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Marker
          title="You are here"
          coordinate={{
            latitude: +startLocation.lat,
            longitude: +startLocation.lng,
          }}
        />
      </MapView>
      <Button style={styles.navigateButton}>Accept task</Button>
    </Layout>
  );
};

export default AvaShopping;

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
    bottom: 50,
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
    position: "relative",
    zIndex: 3,
    height: 50,
  },
  text: {
    color: "white",
  },
});
