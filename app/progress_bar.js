import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import data from "./test_answers"; 

// General animations and styling for quiz's progress bar.

const ProgressBar = ({ progress }) => {
// get quiz questions (from test_answers)
  const allQuestions = data;

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  }); // length of progress is initialized with 0 and will go to total length of questions
  return (
    <View style={styles.progressBarContainer}>
    {/* Animation for progress bar */}
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: "#EDA276" + "90",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};
// Creating and styling the progress bar itself
const styles = StyleSheet.create({
  progressBarContainer: {
    width: "80%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#00000020",
    marginBottom: 10,
  },
});
export default ProgressBar;