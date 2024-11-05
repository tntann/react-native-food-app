import { Button, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    const navigation: any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <View style={{ paddingVertical: 10 }}>
          <Button
            title="Go to Detail"
            onPress={() => navigation.navigate("Details")}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button
            title="Go to user id = 1"
            onPress={() =>
              navigation.navigate("Details", { userId: 1, name: "tantn" })
            }
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button
            title="Go to user id = 2"
            onPress={() =>
              navigation.navigate("Details", { userId: 2, name: "Nhat Tan" })
            }
          />
        </View>
      </View>
    );
  }

  function DetailsScreen() {
    const navigation: any = useNavigation();
    const route: any = useRoute();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>user id = {route?.params?.userId}</Text>
        <Button
          title="Go Back Home"
          // onPress={() => navigation.navigate("Home")}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}`,
          })}
        />
      </Stack.Navigator> */}
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Trang chủ", drawerLabel: "Trang chủ" }}
        />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
      </Drawer.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            tabBarLabel: "Detail user",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
