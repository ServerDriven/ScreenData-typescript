import { Destination } from "../Objects/Destination";
import { SomeStyle } from "../Objects/SomeStyle";
import { ImageAspectScale } from "../Types/ImageAspectScale";

export interface SomeImage {
    id?: string;
    url: string
    assetName?: string
    aspectScale: ImageAspectScale
    style?: SomeStyle
    destination?: Destination
}
