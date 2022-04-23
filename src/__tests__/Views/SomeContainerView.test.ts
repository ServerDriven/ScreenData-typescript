import { ViewType } from '../../Types/ViewType';
import { SomeView } from '../../Objects/SomeView';
import { SomeContainerView } from '../../Views/SomeContainerView';
import { ViewDirectionAxis } from '../../Types/ViewDirectionAxis';
import { SomeButton } from '../../Views/SomeButton';

test(
    'SomeContainerView',
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
        expect(someContainer.isScrollable).toBe(true);
        expect(someContainer.axis).toBe(ViewDirectionAxis.vertical);
        expect(someContainer.views.length).toBe(1);
        expect(someContainer.views[0]).toBe(someView);
    }
);