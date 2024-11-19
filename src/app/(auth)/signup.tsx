import { registerAPI } from "@/api/api";
import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { SignUpSchema } from "@/utils/validate.schema";
import { Link, router } from "expo-router";
import { Formik } from "formik";
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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      const res = await registerAPI(name, email, password);
      setLoading(false);
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
      <Formik
        validationSchema={SignUpSchema}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) =>
          handleSignUp(values.name, values.email, values.password)
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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

            <ShareInput
              title="Họ Tên"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              error={errors.name}
            />

            <ShareInput
              title="Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
            />

            <ShareInput
              title="Password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
            />

            <View style={{ marginVertical: 10 }}></View>
            <ShareButton
              loading={loading}
              title="Đăng Ký"
              onPress={handleSubmit as any}
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

            <SocialButton title="Đăng ký với" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpPage;
