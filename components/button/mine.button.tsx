import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#ccc",
  },
  text: {
    textTransform: "uppercase",
  },
});

interface IProps {
  title: string;
  onPress: () => void;
}

const MineButton = (props: IProps) => {
  const { title, onPress } = props;
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed === true ? 0.5 : 1 })}
      onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <AntDesign name="pluscircleo" size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default MineButton;
