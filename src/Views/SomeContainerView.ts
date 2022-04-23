import { SomeView } from "../Objects/SomeView";
import { SomeStyle } from "../Objects/SomeStyle";
import { ViewDirectionAxis } from "../Types/ViewDirectionAxis";

export interface SomeContainerView {
    id?: String;
    isScrollable: Boolean;
    axis: ViewDirectionAxis;
    views: [SomeView];
    style?: SomeStyle;
}