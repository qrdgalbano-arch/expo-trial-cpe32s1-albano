<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.Titletext}>My Awesome Project</Text>
      <Text style = {styles.Bodytext}>By: Reagan Dantinaise G. Albano</Text>
      <StatusBar style="auto" />
=======
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
      { text: enteredGoalText, key: Math.random().toString() },
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
        />
      </View>
>>>>>>> 14214bb (HOA11.1 Procedure, April 18, 2026)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titletext: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: 'bold',
  },

    Bodytext: {
    fontFamily: 'serif',
    fontSize: 14,
=======
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f7ff',
  },
  goalListContainer: {
    flex: 5,
>>>>>>> 14214bb (HOA11.1 Procedure, April 18, 2026)
  },
});