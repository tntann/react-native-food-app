import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Home Components</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate("HomeDetail")}
      />
    </View>
  );
};

export default Home;
