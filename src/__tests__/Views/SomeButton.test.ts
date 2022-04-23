import { ViewType } from '../../Types/ViewType';
import { SomeView } from '../../Objects/SomeView';
import { SomeButton } from '../../Views/SomeButton';

test(
    'SomeButton',
    () => {
        let someButton: SomeButton = {
            title: "Some Button",
            actionID: "001"
        };
        expect(someButton.title).toBe("Some Button");
        expect(someButton.actionID).toBe("001");
        // expect(someViewType(someButton)).toBe(ViewType.button);

        let expectedSomeView: SomeView = {
            type: ViewType.button,
            someButton: someButton
        };

        // expect(someView(someButton)).toStrictEqual(expectedSomeView)
    }
);