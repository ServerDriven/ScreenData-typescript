import { Destination } from "../Objects/Destination";
import { SomeStyle } from "../Objects/SomeStyle";

export interface SomeButton {
    id?: string;
    title: string;
    actionID?: string;
    destination?: Destination
    style?: SomeStyle
}
