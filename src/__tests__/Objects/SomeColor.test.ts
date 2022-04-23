import { SomeColor } from '../../Objects/SomeColor';

test(
    'SomeColor',
    () => {
        let someColor: SomeColor = {
            red: 0.25,
            green: 0.75,
            blue: 0.314,
            alpha: 1
        };
        expect(someColor.red).toBe(0.25);
        expect(someColor.green).toBe(0.75);
        expect(someColor.blue).toBe(0.314);
        expect(someColor.alpha).toBe(1);
    }
);