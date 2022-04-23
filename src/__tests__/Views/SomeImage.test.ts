import { ImageAspectScale } from "../../Types/ImageAspectScale";
import { SomeImage } from "../../Views/SomeImage";

test(
    'SomeImage',
    () => {
        let someImage: SomeImage = {
            url: "localhost/image.png",
            aspectScale: ImageAspectScale.fill
        };

        expect(someImage.url).toBe("localhost/image.png");
        expect(someImage.aspectScale).toBe(ImageAspectScale.fill);

        expect(someImage.id).toBe(undefined);
        expect(someImage.assetName).toBe(undefined);
        expect(someImage.style).toBe(undefined);
        expect(someImage.destination).toBe(undefined);
    }
);