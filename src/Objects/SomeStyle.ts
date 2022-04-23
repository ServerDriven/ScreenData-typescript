import { SomeColor } from "./SomeColor";

export interface SomeStyle {
    isHidden: Boolean;
    cornerRadius: number;
    foregroundColor?: SomeColor;
    backgroundColor?: SomeColor;
    width?: number;
    height?: number;
    padding: number;
}