import { ImageAspectScale } from '../../Types/ImageAspectScale';

test(
    'ImageAspectScale',
    () => {
        expect(ImageAspectScale.fit).toBe('fit');
        expect(ImageAspectScale.fill).toBe('fill');
    }
);