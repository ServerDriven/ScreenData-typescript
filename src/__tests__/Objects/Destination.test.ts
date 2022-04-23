import { Destination } from '../../Objects/Destination';
import { DestinationType } from '../../Types/DestinationType';

test(
    'Destination',
    () => {
        // DestinationType.screen
        let screenDestination: Destination = {
            type: DestinationType.screen,
            toID: "mock"
        };

        expect(screenDestination.type).toBe(DestinationType.screen);
        expect(screenDestination.toID).toBe("mock");

        // DestinationType.url
        let urlDestination: Destination = {
            type: DestinationType.url,
            toID: "localhost"
        };

        expect(urlDestination.type).toBe(DestinationType.url);
        expect(urlDestination.toID).toBe("localhost");

        // DestinationType.deeplink
        let deeplinkDestination: Destination = {
            type: DestinationType.deeplink,
            toID: "home/detail"
        };

        expect(deeplinkDestination.type).toBe(DestinationType.deeplink);
        expect(deeplinkDestination.toID).toBe("home/detail");
    }
);