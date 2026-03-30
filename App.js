// Procedure
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import {
  useState
} from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style = {styles.appContainer}>

      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} 
        placeholder='Pass the course!!' 
        onChangeText={goalInputHandler} 
        />

        <Button title='Add Goal'
        onPress={addGoalHandler} 
        />
      </View>

      <View style = {styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key ={goal}>{goal}</Text>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 13,
  },
  goalsContainer: {
    flex: 5,
  }
});