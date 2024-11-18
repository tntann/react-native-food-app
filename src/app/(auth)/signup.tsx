import { registerAPI } from "@/api/api";
import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
});

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const res = await registerAPI(name, email, password);
      if (res.data) {
        router.replace({
          pathname: "/(auth)/verify",
          params: { email: email },
        });
      } else {
        const message = Array.isArray(res.message)
          ? res.message[0]
          : res.message;
        Toast.show(message, {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1,
        });
      }
    } catch (error) {
      console.log(">>>> check error: ", error);
    }
  };

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

        <ShareInput title="Họ Tên" value={name} setValue={setName} />

        <ShareInput
          title="Email"
          keyboardType="email-address"
          value={email}
          setValue={setEmail}
        />

        <ShareInput
          title="Password"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />

        <View style={{ marginVertical: 10 }}></View>
        <ShareButton
          title="Đăng Ký"
          onPress={handleSignUp}
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
