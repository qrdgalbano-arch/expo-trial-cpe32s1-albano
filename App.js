// TASK OUTPUT – Hands-on Activity 11.3 | Using Modal Component
// PURPOSE: Goal List App with Modal Prop Testing, iOS vs Android behavior,
// Material Icons integration, and delete functionality

import { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Modal,
  Text,
  Pressable,
  Platform,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  // MODAL STATES (for testing Modal props)
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const [selectedGoalId, setSelectedGoalId] = useState(null);

  function addGoalHandler(enteredGoalText) {
    const updatedGoals = [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ];

    setCourseGoals(updatedGoals);

    // TASK: Modal test condition (>5 items warning)
    if (updatedGoals.length > 5) {
      setWarningVisible(true);
    }
  }

  function confirmDelete(id) {
    setSelectedGoalId(id);
    setDeleteVisible(true);
  }

  function deleteGoalHandler() {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== selectedGoalId)
    );
    setDeleteVisible(false);
    setSelectedGoalId(null);
  }

  return (
    <View style={styles.appContainer}>

      {/* NAVIGATION BAR USER ICON (Material Icons API) */}
      <View style={styles.header}>
        <Pressable onPress={() => setWelcomeVisible(true)}>
          <MaterialIcons name="account-circle" size={40} color="black" />
        </Pressable>
      </View>

      <Image
        source={require('./assets/Zenith.png')}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.key}
              onDelete={confirmDelete}
            />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>

      {/* ================= MODAL PROP TESTING ================= */}

      {/* WELCOME MODAL (icon click) */}
      <Modal
        visible={welcomeVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setWelcomeVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Welcome to the Goal App!</Text>

          <Pressable onPress={() => setWelcomeVisible(false)}>
            <Text style={styles.modalButton}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      {/* WARNING MODAL (>5 items test) */}
      <Modal
        visible={warningVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setWarningVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            You are adding too many goals.
          </Text>

          <Pressable onPress={() => setWarningVisible(false)}>
            <Text style={styles.modalButton}>Okay</Text>
          </Pressable>
        </View>
      </Modal>

      {/* DELETE CONFIRMATION MODAL (iOS vs Android test included) */}
      <Modal
        visible={deleteVisible}
        animationType="slide"
        transparent={true}
        presentationStyle={
          Platform.OS === 'ios' ? 'pageSheet' : undefined
        }
        statusBarTranslucent={true}
        onRequestClose={() => setDeleteVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Confirm delete?
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Pressable onPress={deleteGoalHandler}>
              <Text style={styles.modalButton}>Yes</Text>
            </Pressable>

            <Pressable onPress={() => setDeleteVisible(false)}>
              <Text style={styles.modalButton}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  header: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000aa',
  },
  modalText: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  modalButton: {
    color: 'white',
    backgroundColor: '#5e0acc',
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },
});