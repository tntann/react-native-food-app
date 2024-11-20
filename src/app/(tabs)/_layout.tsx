import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { APP_COLOR } from "@/utils/constant";

const TabLayout = () => {
  const getIcons = (routeName: string, focused: boolean, size: number) => {
    if (routeName === "index")
      return (
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={size}
          color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
        />
      );
    if (routeName === "order")
      return (
        <MaterialIcons
          name="list-alt"
          size={size}
          color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
        />
      );
    if (routeName === "favorite")
      return (
        <AntDesign
          name="hearto"
          size={size}
          color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
        />
      );
    if (routeName === "notification")
      return (
        <Ionicons
          name="notifications-outline"
          size={size}
          color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
        />
      );
    if (routeName === "account")
      return (
        <SimpleLineIcons
          name="user"
          size={size}
          color={focused ? APP_COLOR.ORANGE : APP_COLOR.GRAY}
        />
      );
    return <></>;
  };
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return getIcons(route.name, focused, size);
        },
        headerShown: false,
        tabBarLabelStyle: { paddingBottom: 3 },
        tabBarActiveTintColor: APP_COLOR.ORANGE,
      })}
      // sceneContainerStyle={{ backgroundColor: "#fff" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Đơn hàng",
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Đã thích",
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Thông báo",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Tôi",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
