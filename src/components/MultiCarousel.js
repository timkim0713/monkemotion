import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';


export default function MultiCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive}
            arrows={false}
            swipeable={true}
            showDots={false}
            draggable={true}
            infinite={true}
            autoPlay={true}
        >
            <div>
                <Card sx={{ height: 200, width: 200, }}>
                </Card>
            </div>

            <div>
                <Card sx={{ height: 200, width: 200, }}>
                </Card>
            </div>
            <div>
                <Card sx={{ height: 200, width: 200, }}>
                </Card>
            </div>
            <div>
                <Card sx={{ height: 200, width: 200, }}>
                </Card>
            </div>
            <div>
                <Card sx={{ height: 200, width: 200, }}>
                </Card>
            </div>
           
           
        </Carousel>
    );


}