import { SomeColor } from "./SomeColor";

export interface SomeStyle {
    isHidden: Boolean;
    cornerRadius: Number;
    foregroundColor?: SomeColor;
    backgroundColor?: SomeColor;
    width?: Number;
    height?: Number;
    padding: Number;
}