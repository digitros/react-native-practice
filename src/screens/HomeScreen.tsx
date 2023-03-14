import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationStack";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = (props: Props) => {
  const { navigation } = props;
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to settings" onPress={goToSettings} />
    </View>
  );
};

export default HomeScreen;
