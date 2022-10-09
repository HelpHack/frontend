import { ScrollView, StatusBar, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import TopBar from "src/Components/Common/TopBar";
import ActiveTasks from "src/Containers/Volunteer/Main/ActiveTasks/ActiveTasks";
import AvaTasks from "src/Containers/Volunteer/Main/AvaTasks/AvaTasks";
import Face from "src/assets/guy.jpeg";
import { useAppDispatch } from "src/store";
import { getDirection } from "src/features/tasks/tasksSlice";
import { useSelector } from "react-redux";

interface DirectionProps {
  startLat: string;
  startLng: string;
  endLat: string;
  endLng: string;
  numberOfProducts: string;
}

const Main = () => {
  const dispatch = useAppDispatch();
  const { startLocation, endLocation } = useSelector(
    (state: any) => state.taskSlice
  );
  const { lat: startLat, lng: startLng } = startLocation;
  const { lat: endLat, lng: endLng } = endLocation;
  useEffect(() => {
    dispatch(
      getDirection({
        startLat,
        startLng,
        endLat,
        endLng,
        numberOfProducts: "100",
      })
    );
  }, []);

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
