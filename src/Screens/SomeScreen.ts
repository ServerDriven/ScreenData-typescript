import { SomeColor } from "../Objects/SomeColor";
import { SomeView } from "../Objects/SomeView";

export interface SomeScreen {
    id?: String;
    title: String;
    backgroundColor: SomeColor
    headerView?: SomeView
    someView: SomeView
    footerView?: SomeView
}