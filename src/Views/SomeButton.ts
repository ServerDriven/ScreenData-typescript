import { Destination } from "../Objects/Destination";
import { SomeStyle } from "../Objects/SomeStyle";

export interface SomeButton {
    id?: String;
    title: String;
    actionID?: String;
    destination?: Destination
    style?: SomeStyle
}
