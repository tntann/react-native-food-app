import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

const RootLayout = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };
  return (
    <GestureHandlerRootView>
      <RootSiblingParent>
        <ThemeProvider value={navTheme}>
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
                // contentStyle: { backgroundColor: "#fff" },
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
        </ThemeProvider>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
