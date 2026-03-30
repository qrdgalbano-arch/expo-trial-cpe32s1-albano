// Supplementary Activity (ILO1 to ILO3)
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image
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
    // Check if entered text, when trimmed, is empty = do not put
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    // Removes text in input after pressing add goal
    setEnteredGoalText('');
  };

  return (
    <View style = {styles.appContainer}>
      <Image
        source={require('./assets/Zenith.png')}
        style = {{ width: 100, height: 100, alignSelf: 'center', elevation: 5}}
          />
      <Text style = {styles.titleText}>Zenith</Text>
      <Text style = {styles.contentText}>Rise. Focus. Achieve.</Text>
      <Text style = {styles.authorText}>By Reagan Dantinaise G. Albano</Text>
      <View style = {styles.inputContainer}>

        <TextInput style = {styles.textInput} 
        placeholder='Enter Your Next Victory.'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />

        <Button title='Launch'
        onPress={addGoalHandler}
        />
      </View>

      {/*} For every goal set, add a view with corresponding container for them
        and also make each goal unique by giving them an index. {*/}

      <View style = {styles.goalsContainer}>
        {courseGoals.map((goal,index) => (
          <View key={index} style={styles.insidegoalsContainer}>
            <Text style={styles.goalText}>{goal}</Text>
            </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f7ff',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 25,
  },
  titleText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  contentText: {
    fontWeight: 'semibold',
    fontSize: 16,
    textAlign: 'center',
  },
  authorText: {
    fontSize: 13,
    textAlign: 'center',
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
  },
  insidegoalsContainer: {
    flexDirection: 'row',
  },
  goalText: {
    fontSize: 14,
    fontWeight: 'semibold',
  }
});