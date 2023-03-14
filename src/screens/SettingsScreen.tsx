import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationStack";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const SettingsScreen = (props: Props) => {
  const { navigation } = props;

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Go to home" onPress={goToHome} />
    </View>
  );
};

export default SettingsScreen;
