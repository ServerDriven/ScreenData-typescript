import { SomeView } from "../../Objects/SomeView";
import { SomeColor } from "../../Objects/SomeColor";
import { ViewDirectionAxis } from "../../Types/ViewDirectionAxis";
import { ViewType } from "../../Types/ViewType";
import { SomeButton } from "../../Views/SomeButton";
import { SomeContainerView } from "../../Views/SomeContainerView";
import { SomeScreen } from "../../Screens/SomeScreen";

test(
    'SomeScreen',
    () => {
        let someButton: SomeButton = {
            title: "Some Button",
            actionID: "001"
        };
        let someView: SomeView = {
            type: ViewType.button,
            someButton: someButton
        }
        let someContainer: SomeContainerView = {
            isScrollable: true,
            axis: ViewDirectionAxis.vertical,
            views: [
                someView
            ]
        };

        let someScreen: SomeScreen = {
            id: "Some-ID",
            title: "Some Screen Title",
            backgroundColor: { red: 0, green: 0, blue: 0, alpha: 1 },
            someView: {
                type: ViewType.container,
                someContainer: someContainer
            }
        };

        expect(someScreen.id).toBe("Some-ID")
        expect(someScreen.title).toBe("Some Screen Title")
        expect(someScreen.backgroundColor)
            .toStrictEqual({ red: 0, green: 0, blue: 0, alpha: 1 })
        expect(someScreen.someView.type).toBe(ViewType.container)
        expect(someScreen.someView.someContainer).toBe(someContainer)
    }
);