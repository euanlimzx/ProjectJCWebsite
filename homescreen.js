import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NotesDesc } from "../components/notesdesc";

export const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Hello</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
