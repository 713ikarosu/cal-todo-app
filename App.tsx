import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text) {
      setTodos([...todos, text]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Calendar />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="次はなにする？"
      />
      <Button title="追加" onPress={addTodo} />
      <FlatList
        data={todos.map((todo, index) => ({
          key: index.toString(),
          title: todo,
        }))}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
