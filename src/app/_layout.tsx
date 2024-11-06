import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    // <View style={{ padding: 50 }}>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </View>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Trang chủ" }} />
      <Stack.Screen
        name="product/index"
        options={{ headerTitle: "Sản Phẩm" }}
      />
      <Stack.Screen
        name="(auth)/login"
        options={{ headerTitle: "Đăng nhập" }}
      />
    </Stack>
  );
};

export default RootLayout;
