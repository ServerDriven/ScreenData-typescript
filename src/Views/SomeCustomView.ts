import { SomeView } from "../Objects/SomeView";
import { SomeStyle } from "../Objects/SomeStyle";
import { ViewDirectionAxis } from "../Types/ViewDirectionAxis";
import { Destination } from "../Objects/Destination";
import { SomeImage } from "./SomeImage";

export interface SomeCustomView {
    id?: string;
    title?: string
    subtitle?: string
    style?: SomeStyle
    someImage?: SomeImage
    destination?: Destination
    axis?: ViewDirectionAxis
    views?: [SomeView]
}