// SUPPLEMENTARY OUTPUT – Hands-on Activity 11.1
// ILO2: Component decomposition (Input logic separated from App.js)

import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function inputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Next Victory."
        onChangeText={inputHandler}
        value={enteredGoalText}
      />

      <Button title="Launch" onPress={addGoalHandler} />

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
    width: '70%',
    padding: 10,
  },
});