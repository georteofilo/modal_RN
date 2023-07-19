import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aprendendo Modal</Text>


      <TouchableOpacity style={styles.button}>
        <Text>Abrir</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12131B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    
  },
});
