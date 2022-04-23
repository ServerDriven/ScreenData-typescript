import { DestinationType } from '../../Types/DestinationType';

test(
    'DestinationType',
    () => {
        expect(DestinationType.screen).toBe('screen');
        expect(DestinationType.url).toBe('url');
        expect(DestinationType.deeplink).toBe('deeplink');
    }
);