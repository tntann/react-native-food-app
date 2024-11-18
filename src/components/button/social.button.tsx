import { Image, StyleSheet, View } from "react-native";
import TextBetweenLine from "./text.between.line";
import ShareButton from "./share.button";
import facebookLogo from "@/assets/auth/facebook.png";
import googleLogo from "@/assets/auth/google.png";

const styles = StyleSheet.create({
  welcomeBtn: {
    flex: 1,
    gap: 30,
  },
});

const SocialButton = () => {
  return (
    <View style={styles.welcomeBtn}>
      <TextBetweenLine textColor="black" title="Đăng nhập với" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 30,
        }}
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
          icon={<Image source={facebookLogo} />}
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
          icon={<Image source={googleLogo} />}
        />
      </View>
    </View>
  );
};

export default SocialButton;
