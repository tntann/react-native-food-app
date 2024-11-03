import { Button, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    const navigation:any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <View style={{paddingVertical: 10}}>
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate("Details")}
        />
        </View>
        <View style={{paddingVertical: 10}}>
        <Button
          title="Go to user id = 1"
          onPress={() => navigation.navigate("Details", {userId: 1, name: "tantn"})}
        />
        </View>
        <View style={{paddingVertical: 10}}>
        <Button
          title="Go to user id = 2"
          onPress={() => navigation.navigate("Details", {userId: 2, name: "Nhat Tan"})}
        />
        </View>
      </View>
    );
  }

  function DetailsScreen() {
    const navigation:any = useNavigation();
    const route:any = useRoute();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>user id = {route.params.userId}</Text>
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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
