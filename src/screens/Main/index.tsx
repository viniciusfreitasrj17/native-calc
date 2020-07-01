import React, { FC, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-community/picker";

import InputNumber from "../../components/InputNumber";

interface StateProps {
  value?: any;
  inputOne?: any;
}

type Props = StateProps;

const Main: FC<Props> = () => {
  const [option, setOption] = useState("+");
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [resultado, setResultado] = useState([] as number[]);

  const Calculator = () => {
    switch (option) {
      case "+":
        setResultado([inputOne + inputTwo]);
        break;
      case "-":
        setResultado([inputOne - inputTwo]);
        break;
      case "*":
        setResultado([inputOne * inputTwo]);
        break;
      case "/":
        setResultado([inputOne / inputTwo]);
        break;
      default:
        throw console.error("Invalid Operation");
    }

    return;
  };

  const Reset = () => {
    setInputOne(0);
    setInputTwo(0);
    setResultado([]);
    return;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calc</Text>

      <View style={styles.containerCalc}>
        <InputNumber
          max={100000000}
          style={styles.input}
          onValueChange={(one: number) => setInputOne(one)}
          value={inputOne}
        />

        <Picker
          selectedValue={option}
          style={styles.checkbox}
          onValueChange={(value: any) => setOption(value)}
          itemStyle={styles.check}
        >
          <Picker.Item label="+" value="+" />
          <Picker.Item label="-" value="-" />
          <Picker.Item label="*" value="*" />
          <Picker.Item label="/" value="/" />
        </Picker>

        <InputNumber
          max={100000000}
          style={styles.input}
          onValueChange={(two: number) => setInputTwo(two)}
          value={inputTwo}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={Calculator}>
        <Text>Calculate</Text>
      </TouchableOpacity>

      <Text style={styles.result}> {resultado} </Text>

      <TouchableOpacity style={styles.button} onPress={Reset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 5,
  },
  containerCalc: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  input: {
    width: 100,
    height: 40,
    textAlign: "center",
    borderWidth: 1,
  },
  checkbox: {
    height: 50,
    width: 75,
    marginHorizontal: 20,
    borderWidth: 4,
  },
  check: {
    fontSize: 200,
    fontWeight: "bold",
  },
  button: {
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default Main;
