import { Destination } from "../Objects/Destination";
import { SomeStyle } from "../Objects/SomeStyle";
import { FontType } from "../Types/FontType";

export interface SomeLabel {
    id?: string;
    title: string
    subtitle?: string
    font: FontType
    style?: SomeStyle
    destination?: Destination
}
