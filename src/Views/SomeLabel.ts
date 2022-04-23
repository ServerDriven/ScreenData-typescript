import { Destination } from "../Objects/Destination";
import { SomeStyle } from "../Objects/SomeStyle";
import { FontType } from "../Types/FontType";

export interface SomeLabel {
    id?: String;
    title: String
    subtitle?: String
    font: FontType
    style?: SomeStyle
    destination?: Destination
}
