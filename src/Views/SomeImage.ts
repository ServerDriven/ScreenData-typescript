import { Destination } from "../Objects/Destination";
import { SomeStyle } from "../Objects/SomeStyle";
import { ImageAspectScale } from "../Types/ImageAspectScale";

export interface SomeImage {
    id?: String;
    url: String
    assetName?: String
    aspectScale: ImageAspectScale
    style?: SomeStyle
    destination?: Destination
}
