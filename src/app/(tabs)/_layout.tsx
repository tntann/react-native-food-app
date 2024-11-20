import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      // sceneContainerStyle={{ backgroundColor: "#fff" }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
};

export default TabLayout;
