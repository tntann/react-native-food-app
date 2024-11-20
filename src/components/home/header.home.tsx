import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { APP_COLOR } from "@/utils/constant";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    gap: 3,
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={{ paddingLeft: 5 }}>Giao đến:</Text>
      <View style={styles.location}>
        <Entypo name="location-pin" size={20} color={APP_COLOR.ORANGE} />
        <Text>K115 Đỗ Thúc Tịnh, Đà Nẵng</Text>
      </View>
    </View>
  );
};

export default HeaderHome;
