import { SomeStyle } from '../../Objects/SomeStyle';
import { SomeColor } from '../../Objects/SomeColor';

test(
    'SomeStyle',
    () => {
        let someStyle: SomeStyle = {
            isHidden: false,
            cornerRadius: 8,
            foregroundColor: {
                red: 0,
                green: 0,
                blue: 0,
                alpha: 1
            },
            padding: 0
        };

        expect(someStyle.isHidden).toBe(false);
        expect(someStyle.cornerRadius).toBe(8);
        expect(someStyle.foregroundColor?.red).toBe(0);
        expect(someStyle.foregroundColor?.green).toBe(0);
        expect(someStyle.foregroundColor?.blue).toBe(0);
        expect(someStyle.foregroundColor?.alpha).toBe(1);
        expect(someStyle.padding).toBe(0);

        expect(someStyle.backgroundColor).toBe(undefined);
        expect(someStyle.width).toBe(undefined);
        expect(someStyle.height).toBe(undefined);
    }
);