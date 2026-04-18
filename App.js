import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ]);

    setEnteredGoalText('');
  }

  return (
    <View style={styles.appContainer}>
      <Image
        source={require('./assets/Zenith.png')}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />

      <Text style={styles.titleText}>Zenith</Text>
      <Text style={styles.contentText}>Rise. Focus. Achieve.</Text>
      <Text style={styles.authorText}>By Reagan Dantinaise G. Albano</Text>

      {/* ILO2: Component decomposition (GoalInput handles input logic) */}
      <GoalInput
        enteredGoalText={enteredGoalText}
        onGoalInput={goalInputHandler}
        onAddGoal={addGoalHandler}
      />

      {/* ILO1: FlatList optimized rendering + list container limitation */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
        />
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
  titleText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
  },
  authorText: {
    fontSize: 13,
    textAlign: 'center',
  },
  goalListContainer: {
    flex: 5,
  },
});