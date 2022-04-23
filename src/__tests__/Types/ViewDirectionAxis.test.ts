import { ViewDirectionAxis } from '../../Types/ViewDirectionAxis';

test(
    'ViewDirectionAxis',
    () => {
        expect(ViewDirectionAxis.vertical).toBe('vertical');
        expect(ViewDirectionAxis.horizontal).toBe('horizontal');
    }
);