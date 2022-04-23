import { FontType } from '../../Types/FontType';

test(
    'FontType',
    () => {
        expect(FontType.largeTitle).toBe('largeTitle');
        expect(FontType.title).toBe('title');
        expect(FontType.headline).toBe('headline');
        expect(FontType.body).toBe('body');
        expect(FontType.footnote).toBe('footnote');
        expect(FontType.caption).toBe('caption');
    }
);