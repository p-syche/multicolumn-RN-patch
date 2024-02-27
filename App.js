import {  SafeAreaView, StyleSheet } from 'react-native';
import {MultiColumnList} from './MultiColumnList';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MultiColumnList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
