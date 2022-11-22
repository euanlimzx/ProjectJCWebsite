import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";

export const Title = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Project JC</Text>
    <Text style={styles.subtitle}>
      The definitive (un)official guide to Junior College
    </Text>
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(
          "https://docs.google.com/document/d/1HMfBSqlRAWUSlm2PdokC21wDYS-EZNg4zTssU3FWcAk/edit?usp=sharing"
        );
      }}
    >
      <Text style={styles.study}>
        Read our full study guide here, for free →
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F5F9",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 100,
    color: "#1E2022",
  },
  subtitle: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 30,
    paddingTop: 10,
    color: "#1E2022",
  },
  study: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 25,
    paddingTop: 20,
    textAlign: "right",
    color: "#1E2022",
  },
});
