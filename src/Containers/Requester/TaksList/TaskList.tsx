import { ScrollView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import {Layout, Input, Icon, Button} from "@ui-kitten/components";
import TaskCard from "src/Components/Common/TaskCard/TaskCard";
import {useNavigation} from "@react-navigation/native";

const TaskList = () => {
    const navigation = useNavigation<any>()
    return (
        <Layout style={styles.container}>
            <TaskCard
                title="Shopping"
                details={{ start: "ul. Pomorksa 14", destination: "Kaszubska 14" }}
            />
            <TaskCard
                title="Lyft"
                details={{ start: "ul. Pomorksa 14", destination: "Kaszubska 14" }}
            />
            <TaskCard
                title="House service"
                details={{ start: "ul. Pomorksa 14", destination: "Kaszubska 14" }}
            />
            <Button onPress={() => {
                navigation.navigate('MainRequester')
            }} >I need more help</Button>
        </Layout>
    );
};

export default TaskList;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    inputStyle: {
        marginHorizontal: 8,
        marginBottom: 16,
    },
});
