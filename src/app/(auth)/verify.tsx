import { verifyCodeAPI } from "@/api/api";
import LoadingOverlay from "@/components/loading/overlay";
import { APP_COLOR } from "@/utils/constant";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Toast from "react-native-root-toast";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20,
  },
});

const VerifyPage = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const optRef = useRef<OTPTextView>(null);
  const [code, setCode] = useState<string>("");

  const { email } = useLocalSearchParams();

  const verifyCode = async () => {
    // call api
    Keyboard.dismiss();
    setIsSubmit(true);
    const res = await verifyCodeAPI(email as string, code);
    setIsSubmit(false);

    if (res.data) {
      optRef?.current?.clear();
      Toast.show("Kích hoạt tài khoản thành công", {
        duration: Toast.durations.LONG,
        textColor: "white",
        backgroundColor: APP_COLOR.GREEN,
        opacity: 1,
      });
      router.navigate("/(auth)/login");
    } else {
      Toast.show(res.message as string, {
        duration: Toast.durations.LONG,
        textColor: "white",
        backgroundColor: APP_COLOR.ORANGE,
        opacity: 1,
      });
    }
  };
  useEffect(() => {
    if (code && code.length === 6) {
      verifyCode();
    }
  }, [code]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Xác thực tài khoản</Text>
        <Text style={{ marginVertical: 10 }}>
          Vui lòng nhập mã xác nhận đã được gửi tới địa chỉ email
        </Text>
        <View style={{ marginVertical: 20 }}>
          <OTPTextView
            ref={optRef}
            handleTextChange={setCode}
            autoFocus
            inputCount={6}
            inputCellLength={1}
            tintColor={APP_COLOR.ORANGE}
            textInputStyle={{
              width: 42,
              height: 42,
              borderWidth: 1,
              borderBlockColor: APP_COLOR.GRAY,
              borderBottomWidth: 1,
              borderRadius: 5,
              // @ts-ignore:next-line
              color: APP_COLOR.ORANGE,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <Text>Không nhận được mã xác nhận! </Text>
          <Text style={{ color: APP_COLOR.ORANGE }}>Gửi lại</Text>
        </View>
      </View>
      {isSubmit && <LoadingOverlay />}
    </>
  );
};

export default VerifyPage;
