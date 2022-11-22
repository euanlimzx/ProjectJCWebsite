import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";

export const NotesDesc = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Notes and Resources</Text>
    <Text style={styles.subtitle}>
      Don't see it as money spent, see it as time saved.
    </Text>
    <Text style={styles.desc}>
      Here is all you need to know:{"\n"}
      {"\n"}1. Our notes cover at least 5 years worth of A Level TYS Papers and
      Prelim Papers from all the top schools in Singapore, on top of tutorial
      questions from RJC{"\n"}
      {"\n"}2. They contain all the specific keywords that A Level Examiners
      mark for. {"\n"}
      {"\n"}3. The creators of all resources have attained straight As for their
      respective subjects throughout JC.{"\n"}
      {"\n"}4. Our notes are updated yearly, by students who have likewise
      attained straight As throughout JC.
    </Text>
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(
          "https://docs.google.com/document/d/1JrXEal9VdBZZYpJKWh277911q3RpImdGA9oGxisnC7E/edit?usp=sharing"
        );
      }}
    >
      <Text style={styles.click}>
        Click here to view our notes and resources
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 26,
    backgroundColor: "#F0F5F9",
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
    color: "#1E2022",
    paddingTop: 10,
  },
  desc: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 20,
    paddingTop: 20,
    marginLeft: 80,
    marginRight: 80,
    paddingBottom: 40,
    textAlign: "justify",
    color: "#1E2022",
  },
  click: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 25,
    fontWeight: 500,
    marginLeft: 80,
    marginRight: 80,
    paddingBottom: 40,
    color: "#1E2022",

    textAlign: "justify",
  },
});
