import { SomeView } from "../Objects/SomeView";
import { SomeStyle } from "../Objects/SomeStyle";
import { ViewDirectionAxis } from "../Types/ViewDirectionAxis";
import { Destination } from "../Objects/Destination";
import { SomeImage } from "./SomeImage";

export interface SomeCustomView {
    id?: String;
    title?: String
    subtitle?: String
    style?: SomeStyle
    someImage?: SomeImage
    destination?: Destination
    axis?: ViewDirectionAxis
    views?: [SomeView]
}