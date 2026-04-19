// TASK OUTPUT – Hands-on Activity 11.3 | Using Modal Component
// MODIFIED LIST ITEM WITH DELETE SUPPORT

import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={() => props.onDelete(props.id)}>
      <View style={styles.item}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
  },
});