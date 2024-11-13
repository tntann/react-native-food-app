import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
});

const SignUpPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 600,
              marginVertical: 28,
            }}
          >
            Đăng ký tài khoản
          </Text>
        </View>

        <ShareInput title="Họ Tên" />

        <ShareInput title="Email" keyboardType="email-address" />

        <ShareInput title="Password" />

        <View style={{ marginVertical: 10 }}></View>
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

        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black" }}>Đã có tài khoản?</Text>
          <Link href={"/(auth)/login"}>
            <Text
              style={{
                color: APP_COLOR.ORANGE,
              }}
            >
              Đăng nhập
            </Text>
          </Link>
        </View>

        <SocialButton />
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
