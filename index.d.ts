import * as React from "react";

export interface RadioButtonProps {
  color?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: object;
  layout?: "row" | "column";
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value?: string;
}

export interface RadioGroupProps {
  layout?: "row" | "column";
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  radioButtons: RadioButtonProps[];
}

declare class RadioGroup extends React.Component<RadioGroupProps, any> {}

export default RadioGroup;
