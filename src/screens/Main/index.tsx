import React, { FC, useState, useEffect, RefObject, createRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-community/picker";

import InputNumber from "../../components/InputNumber";
import styles from "./styles";

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
  const [emptyInputOne, setEmptyInputOne] = useState({});
  const [emptyInputTwo, setEmptyInputTwo] = useState({});
  const refInput1: RefObject<HTMLInputElement> = createRef();
  const refInput2: RefObject<HTMLInputElement> = createRef();

  const Calculator = () => {
    if (inputOne && inputTwo) {
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
    } else {
      const color = { borderColor: "#F00" };
      if (!inputOne) {
        refInput1.current?.focus();
        setEmptyInputOne(color);
      } else {
        refInput2.current?.focus();
        setEmptyInputTwo(color);
      }
      alert("Preencha os campos");
    }

    return;
  };

  const Reset = () => {
    setInputOne(0);
    setInputTwo(0);
    setResultado([]);

    return;
  };

  useEffect(() => {
    refInput1.current?.focus();
  }, [resultado]);

  useEffect(() => {
    emptyInputOne && inputOne ? setEmptyInputOne({}) : null;
    emptyInputTwo && inputTwo ? setEmptyInputTwo({}) : null;
  }, [inputOne, inputTwo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calc</Text>

      <View style={styles.containerCalc}>
        <InputNumber
          max={100000000}
          style={[styles.input, emptyInputOne]}
          onValueChange={(one: number) => setInputOne(one)}
          value={inputOne}
          refI={refInput1}
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
          style={[styles.input, emptyInputTwo]}
          onValueChange={(two: number) => setInputTwo(two)}
          value={inputTwo}
          refI={refInput2}
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

export default Main;
