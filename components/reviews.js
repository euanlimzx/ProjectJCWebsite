import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const Reviews = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Don't take it from us, take it from them</Text>
    <Text style={styles.subtitle}>Reviews collected from the year of 2022</Text>
    <View style={{ flexDirection: "row", paddingBottom: 19 }}>
      <Card style={styles.cardmain}>
        <Card.Content>
          <Title style={{ fontFamily: "EBGaramond_500Medium", fontSize: 28 }}>
            ⭐⭐⭐⭐{"\n"}In the year 2022, we received an average rating of 4.2
            stars
            {"\n"}80% of students also saw an increase in their grades after
            using our notes{"\n"}
          </Title>
        </Card.Content>
      </Card>
    </View>
    <View style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "Very extensive, especially GP. My chemistry also jumped from an E
              to A, legit made my life much easier"
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Nishant from RJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "I ordered the GP content notes. It served as a convenient yet
              effective go-to guide to enhance my knowledge on various topics.
              It was in-depth, wide-ranging as well as relevant. "
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Amanda from RJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "pretty good stuff, was able to use your Flashcards as a
              supplement to my own deck and saw great improvement in my grades"
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Fazhi from CJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>{" "}
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        paddingTop: 30,
      }}
    >
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "Concise notes, love the FAQs the most"
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Jun from YIJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "really fast service and reasonable prices, the resources are high
              quality as well, definitely worth the buy "
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Dexter from DHS
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "I like the resources, flashcards are good ! "
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Jerald from SAJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        paddingTop: 10,
      }}
    >
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "very comprehensive chem notes! "
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Mel from EJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "Highly organised and succinct notes :) "
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~Xun Qi from NYJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={{ flex: 0.3, paddingRight: 10 }}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ fontFamily: "EBGaramond_500Medium" }}>
              "very good notes especially the flash cards "
            </Title>
            <Paragraph style={{ fontFamily: "EBGaramond_500Medium" }}>
              ~P from VJC
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>
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
    color: "#1E2022",
    paddingTop: 10,
    paddingBottom: 20,
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
  card: {
    backgroundColor: "#FFFFFF",
  },
  cardmain: {
    backgroundColor: "#FFFFFF",
  },
});
