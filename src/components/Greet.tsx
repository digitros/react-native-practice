import { Text } from "react-native";
import React from "react";

interface Props {
  name: string;
}

export default function Greet(props: Props): JSX.Element {
  const { name } = props;
  return (
    <>
      <Text>Greet {name}</Text>
    </>
  );
}
