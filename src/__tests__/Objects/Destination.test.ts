import { Destination } from '../../Objects/Destination';
import { DestinationType } from '../../Types/DestinationType';

test(
    'Destination',
    () => {
        let screenDestination: Destination = {
            type: DestinationType.screen,
            toID: "mock"
        };
        expect(screenDestination.type).toBe(DestinationType.screen);
        expect(screenDestination.toID).toBe("mock");

        let urlDestination: Destination = {
            type: DestinationType.url,
            toID: "localhost"
        };
        expect(urlDestination.type).toBe(DestinationType.url);
        expect(urlDestination.toID).toBe("localhost");

        let deeplinkDestination: Destination = {
            type: DestinationType.deeplink,
            toID: "home/detail"
        };
        expect(deeplinkDestination.type).toBe(DestinationType.deeplink);
        expect(deeplinkDestination.toID).toBe("home/detail");
    }
);