import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainCarousel() {

    return (
        <Carousel autoPlay={true} emulateTouch={true}>
            <div>
                <img src="https://picsum.photos/id/237/600/300" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://picsum.photos/id/237/600/300" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://picsum.photos/id/237/600/300" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};