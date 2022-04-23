import { SomeSpacer } from "../../Views/SomeSpacer";

test(
    'SomeSpacer',
    () => {
        let someSpacer: SomeSpacer = {
            size: 8
        };

        expect(someSpacer.size).toBe(8);
    }
);