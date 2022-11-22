import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { NotesDesc } from "../components/notesdesc";
import { Title } from "../components/title";
import { Desc } from "../components/titledesc";
import { NotesDesc } from "../components/notesdesc";

export const HomeScreen = () => (
  <View style={styles.container}>
    <Title />
    <Desc />
    <NotesDesc />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
