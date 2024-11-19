import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <RootSiblingParent>
        <SafeAreaView style={{ flex: 1 }}>
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
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(auth)/signup"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/verify"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="product/index"
              options={{ headerTitle: "Sản Phẩm" }}
            />
            <Stack.Screen
              name="(auth)/login"
              options={{ headerShown: false }}
            />
          </Stack>
        </SafeAreaView>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
