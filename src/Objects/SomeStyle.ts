import { SomeColor } from "./SomeColor";

export interface SomeStyle {
    isHidden: boolean;
    cornerRadius: number;
    foregroundColor?: SomeColor;
    backgroundColor?: SomeColor;
    width?: number;
    height?: number;
    padding: number;
}