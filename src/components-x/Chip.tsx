import React from "react";

export enum ChipColor {
  Blue = "blue",
  Indigo = "indigo",
  Green = "green",
  Orange = "orange",
}

interface ChipProps {
  label: string;
  color: ChipColor;
}

export class Chip extends React.Component<ChipProps> {
  render() {
    return <div className={`chip ${this.props.color}`}>{this.props.label}</div>;
  }
}

export default Chip;
