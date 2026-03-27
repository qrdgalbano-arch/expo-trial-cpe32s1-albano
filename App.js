import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.Titletext}>My Awesome Project</Text>
      <Text style = {styles.Bodytext}>By: Reagan Dantinaise G. Albano</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});