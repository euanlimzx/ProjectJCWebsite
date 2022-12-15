import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { NotesDesc } from "../components/notesdesc";
import { Title } from "../components/title";
import { Desc } from "../components/titledesc";
import { NotesDesc } from "../components/notesdesc";
import { Reviews } from "../components/reviews";

export const HomeScreen = () => (
  <View style={styles.container}>
    <Title />
    <Desc />
    <NotesDesc />
    <Reviews />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
