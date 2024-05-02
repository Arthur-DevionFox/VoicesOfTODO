import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Header} from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column"
  },
  text: {
    fontSize: 18,
  }
});
