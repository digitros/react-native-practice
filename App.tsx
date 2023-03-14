import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoginForm } from "./src/components/LoginForm";
import Greet from "./src/components/Greet";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <Greet name={name} />
      <LoginForm setName={setName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
