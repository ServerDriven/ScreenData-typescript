import { SomeText } from "../../Views/SomeText";

test(
    'SomeText',
    () => {
        let someText: SomeText = {
            title: "Some Text"
        };

        expect(someText.title).toBe("Some Text");

        expect(someText.id).toBe(undefined);
        expect(someText.style).toBe(undefined);
    }
);