import React, { FC, useCallback } from "react";
import { StyleProp, TextStyle, TextInput } from "react-native";

// const VALID = /^[1-9]{1}[0-9]*$/; // dolar

interface Props {
  max?: number;
  onValueChange: (value: number) => void;
  style?: StyleProp<TextStyle>;
  refI?: any;
  value: number;
}

const CurrencyInput: FC<Props> = ({
  max = Number.MAX_SAFE_INTEGER,
  onValueChange,
  style,
  value,
  refI,
}) => {
  const valueAbsTrunc = Math.trunc(Math.abs(value));
  if (
    value !== valueAbsTrunc ||
    !Number.isFinite(value) ||
    Number.isNaN(value)
  ) {
    throw new Error(`invalid value property`);
  }

  const handleChangeText = useCallback((text: string) => {
    if (text === "") {
      onValueChange(0);
      return;
    }
    // if (!VALID.test(text)) {  //verification if dolar
    //   return;
    // }
    const nextValue = parseInt(text);
    if (nextValue > max) {
      return;
    }
    onValueChange(nextValue);
  }, []);

  const valueInput = value === 0 ? "" : value.toString();

  return (
    <>
      <TextInput
        ref={refI}
        contextMenuHidden
        keyboardType="numeric"
        onChangeText={handleChangeText}
        value={valueInput}
        style={style}
      />
    </>
  );
};

export default CurrencyInput;
