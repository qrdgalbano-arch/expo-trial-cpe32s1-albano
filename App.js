// SUPPLEMENTARY OUTPUT – Hands-on Activity 11.1
// ILO1: FlatList optimized rendering + container limitation
// ILO2: Component decomposition using GoalInput and GoalItem

import {
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native';
import { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ]);
  }

  return (
    <View style={styles.appContainer}>

      <Image
        source={require('./assets/Zenith.png')}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
          keyExtractor={(item) => item.key}
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
  goalListContainer: {
    flex: 5,
  },
});