// SUPPLEMENTARY OUTPUT – Hands-on Activity 11.2
// Focus: Replacing Button with Pressable for 'Add Goal'
// Objective: Demonstrate improved interaction handling using Pressable

import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  // Updates state as user types input
  function inputHandler(text) {
    setEnteredGoalText(text);
  }

  // Sends input value to parent component and clears field
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>

      {/* Text input for goal entry */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Next Victory."
        onChangeText={inputHandler}
        value={enteredGoalText}
      />

      {/* Pressable replaces Button to allow custom interaction behavior */}
      <Pressable
        onPress={addGoalHandler}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed
        ]}
      >
        <Text style={styles.buttonText}>Launch</Text>
      </Pressable>

    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textInput: {
    borderWidth: 2,
    borderColor: '#ccc',
    width: '60%',
    padding: 10,
  },

  // Base Pressable styling (replaces Button default UI)
  button: {
    backgroundColor: '#5e0acc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },

  // Visual feedback when Pressable is active
  pressed: {
    opacity: 0.5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});