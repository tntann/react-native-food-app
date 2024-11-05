import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

interface IProps {
  addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
  const { addTodo } = props;
  const [name, setName] = useState<string>("");

  const handleAddNewTodo = () => {
    // validate
    if (!name) {
      Alert.alert("Thông tin không hợp lệ", "Tiêu đề không được để trống", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);

      return;
    }
    addTodo(name);
    setName("");
  };
  return (
    <>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          onChangeText={(value) => setName(value)}
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.todoInput}
        />
        <MineButton title="add new" onPress={handleAddNewTodo} />
      </View>
    </>
  );
};

export default InputTodo;
