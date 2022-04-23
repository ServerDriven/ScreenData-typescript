import { ViewType } from "../Types/ViewType";
import { SomeButton } from "../Views/SomeButton";
import { SomeContainerView } from "../Views/SomeContainerView";
import { SomeCustomView } from "../Views/SomeCustomView";
import { SomeImage } from "../Views/SomeImage";
import { SomeLabel } from "../Views/SomeLabel";
import { SomeSpacer } from "../Views/SomeSpacer";
import { SomeText } from "../Views/SomeText";

export interface SomeView {
    type: ViewType;

    someContainer?: SomeContainerView;
    someImage?: SomeImage;
    someLabel?: SomeLabel;
    someText?: SomeText;
    someButton?: SomeButton;
    someCustomView?: SomeCustomView;
    someSpacer?: SomeSpacer;
}