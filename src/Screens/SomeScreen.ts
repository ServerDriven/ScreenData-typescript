import { SomeColor } from "../Objects/SomeColor";
import { SomeView } from "../Objects/SomeView";

export interface SomeScreen {
    id?: string;
    title: string;
    backgroundColor: SomeColor
    headerView?: SomeView
    someView: SomeView
    footerView?: SomeView
}