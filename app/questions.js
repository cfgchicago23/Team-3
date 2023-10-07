import React from "react";
import { View, StyleSheet, Text } from "react-native";
import data from "./test_answers";

// General formatting + style for box holding question, as well as count
// for current question the user is at.

const Questions = ({ index, question }) => {
  return (
    <View style={{}}>
      {/* To display question count */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{ color: "#333", fontSize: 15, opacity: 0.6, marginRight: 2 }}
        >
          {index + 1}
        </Text>
        <Text style={{ color: "#333", fontSize: 13, opacity: 0.6 }}>
          / {data.length}
        </Text>
      </View>

      {/* Styling for question */}
      <Text
        style={{
          color: "#333",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {question}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Questions;