import { useState } from 'react';
import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { ActionModal } from './src/ActionModal'

export default function App() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aprendendo Modal</Text>


      <TouchableOpacity style={styles.button} onPress={() => setVisibleMenu(true)}>
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleMenu}
        transparent={true}
        onRequestClose={ () => setVisibleMenu(false)}
      >
        <ActionModal
          handleClose = {() => setVisibleMenu(false)}
        />
      </Modal>

      <StatusBar style="light" />
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
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
