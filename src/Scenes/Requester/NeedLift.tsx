import { StyleSheet, View } from "react-native";
import React from "react";
import TopBar from "src/Components/Common/TopBar";

import Face from "src/assets/old-lady.jpeg";
import NeedLiftContainer from "src/Containers/Requester/NeedLift/NeedLiftContainer";

const NeedLift = () => {
  return (
    <View style={styles.container}>
      <TopBar name="Barbara" img={Face} />

      <NeedLiftContainer />
    </View>
  );
};

export default NeedLift;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
