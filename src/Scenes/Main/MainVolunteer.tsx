import { ScrollView, StatusBar, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";
import TopBar from "src/Components/Common/TopBar";
import ActiveTasks from "src/Containers/Volunteer/Main/ActiveTasks/ActiveTasks";
import AvaTasks from "src/Containers/Volunteer/Main/AvaTasks/AvaTasks";
import Face from "src/assets/guy.jpeg";
import { useAppDispatch } from "src/store";
import {getDirection, getTasks} from "src/features/tasks/tasksSlice";
import { useSelector } from "react-redux";
import tasksService from "src/features/tasks/tasksService";

interface DirectionProps {
  startLat: string;
  startLng: string;
  endLat: string;
  endLng: string;
  numberOfProducts: string;
}

const Main = () => {
    const [tasks, setTasks] = useState([])
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
    const run = async () => {
        const res = await tasksService.getTasks()
        console.log({res})
        setTasks(res)
    }
    run()
    // dispatch(getTasks({}))
  }, []);

  console.log({tasks})
  const activeTasks = tasks.filter(t => t.status === 'ACTIVE')
  const avaTasks = tasks.filter(t => t.status === 'PENDING')

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <TopBar name="David" img={Face} />
      <ActiveTasks tasks={activeTasks}/>
      <AvaTasks tasks={avaTasks}/>
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
