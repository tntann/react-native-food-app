import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 20,
    gap: 10,
  },
  inputGroup: {
    padding: 5,
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
  textInput: {
    borderColor: "#d0d0d0",
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Đăng ký tài khoản</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.text}>Họ tên</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.text}>Email</Text>
        <TextInput keyboardType="email-address" style={styles.textInput} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.textInput} />
      </View>

      <ShareButton
        title="Đăng Ký"
        onPress={() => alert("me")}
        textStyle={{
          textTransform: "uppercase",
          color: "#fff",
          paddingVertical: 5,
        }}
        btnStyle={{
          justifyContent: "center",
          borderRadius: 30,
          marginHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: APP_COLOR.ORANGE,
        }}
        pressStyle={{ alignSelf: "stretch" }}
      />
    </View>
  );
};

export default SignUpPage;
