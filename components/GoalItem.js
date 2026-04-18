import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    flexDirection: 'row',
  },
  goalText: {
    fontSize: 14,
    fontWeight: 'semibold',
  },
});