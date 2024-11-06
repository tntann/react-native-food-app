import { StyleSheet, Text, View } from "react-native";
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/components/button/share.button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
  },
  welcomeText: {
    flex: 0.6,
    borderColor: "green",
    borderWidth: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  welcomeBtn: {
    flex: 0.4,
    borderColor: "gray",
    borderWidth: 5,
    gap: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "600",
  },
  body: {
    fontSize: 30,
    color: APP_COLOR.ORANGE,
    marginVertical: 10,
  },
  slogan: {},
  btnContainer: {},
  btnContent: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  btnText: {
    textTransform: "uppercase",
  },
});

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.body}>GrubGo</Text>
        <Text style={styles.slogan}>
          Your favorite foods delivered fast at your door.
        </Text>
      </View>

      <View style={styles.welcomeBtn}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            marginHorizontal: 50,
          }}
        >
          <Text
            style={{
              padding: 10,
              textAlign: "center",
              backgroundColor: "white",
              alignSelf: "center",
              position: "relative",
              top: 20,
            }}
          >
            <Text>Đăng nhập với</Text>
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
        >
          <ShareButton
            title="facebook"
            onPress={() => alert("me")}
            textStyle={{ textTransform: "uppercase" }}
            pressStyle={{ alignSelf: "stretch" }}
            btnStyle={{
              justifyContent: "center",
              borderRadius: 30,
              backgroundColor: "#fff",
            }}
            icon={<FontAwesome5 name="facebook" size={30} color="black" />}
          />
          <ShareButton
            title="google"
            onPress={() => alert("me")}
            textStyle={{ textTransform: "uppercase" }}
            pressStyle={{ alignSelf: "stretch" }}
            btnStyle={{
              justifyContent: "center",
              borderRadius: 30,
              paddingHorizontal: 20,
              backgroundColor: "#fff",
            }}
            icon={<FontAwesome5 name="google" size={30} color="black" />}
          />
        </View>

        <View>
          <ShareButton
            title="Đăng nhập với email"
            onPress={() => alert("me")}
            textStyle={{ color: "#fff", paddingVertical: 5 }}
            btnStyle={{
              justifyContent: "center",
              borderRadius: 30,
              marginHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "#2c2c2c",
            }}
            pressStyle={{ alignSelf: "stretch" }}
          />
        </View>

        <View>
          <Text style={{ textAlign: "center" }}>
            Chưa có tài khoản? Đăng ký.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
