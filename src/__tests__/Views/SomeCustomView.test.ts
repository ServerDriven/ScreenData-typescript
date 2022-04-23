import { SomeCustomView } from "../../Views/SomeCustomView";

test(
    'SomeCustomView',
    () => {
        let someCustomView: SomeCustomView = {
            id: "Custom-View-ID"
        };

        expect(someCustomView.id).toBe("Custom-View-ID");
        expect(someCustomView.title).toBe(undefined);
        expect(someCustomView.subtitle).toBe(undefined);
        expect(someCustomView.style).toBe(undefined);
        expect(someCustomView.someImage).toBe(undefined);
        expect(someCustomView.destination).toBe(undefined);
        expect(someCustomView.axis).toBe(undefined);
        expect(someCustomView.views).toBe(undefined);
    }
);