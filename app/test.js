import React, { useState } from "react";
import { View, Text, ScrollView, Animated, StyleSheet, TouchableOpacity, Link } from "react-native";
import data from "./test_answers";
import ProgressBar from "./progress_bar";
import Questions from "./questions";

// General page for quiz - includes test_answers, progress_bar, and questions.
// Incorporates state maintenence for 

const QuizPage = ({ navigation }) => {
  const allQuestions = data;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);

  // For starting the quiz all over
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };
  // For showing whether or not an answer is correct
  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled == false) {
      let correct_option = allQuestions[currentQuestionIndex]["correct_option"];

      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      // increment score if correct answer was chosen
      if (selectedOption == correct_option) {
        setScore(score + 1);
      }
    }
  };
  // Displays end result score
  const handleNext = (navigation) => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      navigation.navigate("Result", { score: score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
    }
    // Animations for progress bar and question number
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1900,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  // Rendering for elements displayed on the 
  const renderOptions = (navigation) => {
    return (
      <View style={{ marginTop: 100 }}>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => validateAnswer(option, navigation)}
              key={index}
              style={[
                { ...styles.optionsText },
                {
                  backgroundColor: isOptionsDisabled
                    ? option == correctOption
                      ? "#7be25b"
                      : option == currentOptionSelected
                      ? "#f0222b" //red
                      : " #e39cbc" //gray
                    : "#fac782",
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  textAlign: "center",
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ProgressBar progress={progress} />

          <Questions
            index={currentQuestionIndex}
            question={allQuestions[currentQuestionIndex]?.question}
          />
        </View>
        {renderOptions(navigation)}
      </View>
      <View style={{ position: "absolute", bottom: -75, right: 20 }}>
        <TouchableOpacity
          style={[
            { ...styles.btnNext },
            {
              backgroundColor: !currentOptionSelected ? "#cfcdcc" : "#ffffff",
            },
          ]}
          disabled={!currentOptionSelected}
          onPress={() => handleNext(navigation)}
        >
          <Text style={styles.btnNextText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styling for answer boxes
const styles = StyleSheet.create({
  scrollView: { backgroundColor: "#f0ead6ff" },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
  },
  subContainer: {
    marginTop: 50,
    marginVertical: 10,
    padding: 40,
    borderTopRightRadius: 40,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  optionsText: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnNext: {
    borderRadius: 10,

    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  btnNextText: {
    color: "#333",
    fontSize: 17,
    letterSpacing: 1.1,
  },
});
export default QuizPage;