import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  // default display: flex => column
  container: {
    flex: 1,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "gray",

    flexDirection: "column", 
    justifyContent: "center", // oy
    // alignItems: "center", // ox

    // flexDirection: "row", 
    // justifyContent: "center", // ox
    // alignItems: "center", // oy
  },
  item1: {
    padding: 20,
    backgroundColor: "pink",
    borderWidth: 1,
    flex: 4,
    width: 80,
  },
  item2: {
    flex: 1,
    padding: 20,
    backgroundColor: "red",
    borderWidth: 1,
    width: 70,
  },
  item3: {
    flex: 1,
    padding: 20,
    backgroundColor: "green",
    borderWidth: 1,
    width: 100,
  },
  item4: {
    padding: 20,
    backgroundColor: "darkorange",
    borderWidth: 1,
  },
});

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>Item 4</Text>
      </View>
    </View>
  );
};

export default Flexbox;
