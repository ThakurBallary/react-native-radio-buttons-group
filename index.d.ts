import * as React from "react";
import { RadioGroup } from "./index";

export interface GroupItem {
  color?: string;
  disable?: boolean;
  label?: string;
  layout?: "row" | "column";
  selected?: boolean;
  size?: number;
  value?: string;
}

export interface RadioGroupProps {
  radioButtons: GroupItem[];
  onPress: (label: GroupItem[]) => void;
  flexDirection?: "row" | "column";
}

declare class RadioGroup extends React.Component<RadioGroupProps, any> {}

export default RadioGroup;
