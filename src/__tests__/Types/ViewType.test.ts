import { ViewType } from '../../Types/ViewType';

test(
    'ViewType',
    () => {
        expect(ViewType.label).toBe('label');
        expect(ViewType.text).toBe('text');
        expect(ViewType.button).toBe('button');
        expect(ViewType.image).toBe('image');
        expect(ViewType.container).toBe('container');
        expect(ViewType.custom).toBe('custom');
        expect(ViewType.spacer).toBe('spacer');
    }
);