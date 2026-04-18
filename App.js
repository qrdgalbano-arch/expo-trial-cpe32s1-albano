// SUPPLEMENTARY OUTPUT – Hands-on Activity 11.1
// This submission already covers:
// ILO1: ScrollView vs FlatList + optimized list rendering + container limitation
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

      {/* ILO2: Component Decomposition (GoalInput handles input logic) */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* ILO1: Optimized List Rendering (FlatList replaces ScrollView for performance) */}
      {/* ILO1: Container limitation applied via flex-controlled View */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            // ILO2: Reusable custom component for list item rendering
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

  // ILO1: Used to control visible area of list (scrollable constraint region)
  goalListContainer: {
    flex: 5,
  },
});