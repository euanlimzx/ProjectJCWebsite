import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Desc = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      "The document you wish you read before JC started"
    </Text>
    <Text style={styles.subtitle}>
      (and your future self will be glad you did)
    </Text>
    <Text style={styles.desc}>
      Studying for the GCE A Levels in Singapore can be tough. We created
      Project JC because there were so many study techniques, and tips and
      tricks we wished we knew before we started our Junior College journey in
      Singapore.{"\n"}
      {"\n"}Written by indiviudals who have managed to secure straight As
      throughout JC whilst maintaining multiple CCAs, leadership positions (and
      even a social life! ), Project JC aims to be an "all you need to know"
      guide for you to set yourself up for success and thrive in JC.{"\n"}
      {"\n"}
      Our free 20 page document covers study techniques, time management /
      scheduling tips, where to get free notes, as well as "how to study" guides
      for H2 Biology, H2 Chemistry, H2 Math, H2 Physics, H2 Economics, and H2
      GP. With specific sections for each subject, our study techniques have
      also been scientifically proven to be the most effective way to score for
      your H2 and H1 subjects.
      {"\n"}
      {"\n"}At Project JC, we believe that resources should be free, or at the
      very least, affordable. On top of the free study guide, we also provide
      high-quality notes and resources at very affordable prices. With over 400+
      purchases last year alone, we are confident of the quality of our notes.
      Check out our previews in the link below.
      {"\n"}
      {"\n"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 26,
  },
  title: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 30,
    color: "#1E2022",
    textAlign: "center",
    paddingTop: 20,
  },
  subtitle: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 17,
    paddingTop: 10,
    color: "#1E2022",
  },
  desc: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 20,
    paddingTop: 20,
    marginLeft: 80,
    marginRight: 80,
    paddingBottom: 100,
    textAlign: "justify",
    color: "#1E2022",
  },
});
