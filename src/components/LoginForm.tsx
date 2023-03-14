import { ChangeEvent, MouseEventHandler } from "react";
import { TextInput, Button, Text } from "react-native";

interface Props {
  setName: (name: string) => void;
}

export const LoginForm = (props: Props): JSX.Element => {
  const { setName } = props;
  return (
    <>
      <TextInput placeholder="Username" onChangeText={(e) => setName(e)} />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => console.log("Click")} />
    </>
  );
};
