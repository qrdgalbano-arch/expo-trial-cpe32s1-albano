// SUPPLEMENTARY OUTPUT – Hands-on Activity 11.1
// ILO2: Component decomposition (Reusable list item component)

import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
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