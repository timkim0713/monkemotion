import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainCarousel() {

    return (
        <Carousel
            autoPlay={true} emulateTouch={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
            <div>
                <img
                    height={400}
                    style={{ objectFit: "cover" }}
                    src="https://images.newscientist.com/wp-content/uploads/2022/02/01174019/PRI_221086136.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" />
                <p className="legend" style={{ backgroundColor: "#613f16" }}>Olive Baboons (Papio Anubis) that are located at the Seneca Park Zoo are used for this study.</p>
            </div>
            <div>
                <img style={{ objectFit: "cover" }}
                    height={400} src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_900/https://neprimateconservancy.org/wp-content/uploads/2021/10/olive-baboon-animal-1307280-en-resize.jpg" />
                <p className="legend" style={{ backgroundColor: "#613f16" }}>Olive Baboons live in groups, also known as "troops", in the wild.</p>
            </div>
            <div>
                <img style={{ objectFit: "cover" }}
                    height={400} src="https://journals.plos.org/plosone/article/figure/image?download&size=large&id=10.1371/journal.pone.0263314.g001" />
                <p className="legend" style={{ backgroundColor: "#613f16" }}>Olive Baboons are commonly encountered in Africa.</p>
            </div>
        </Carousel>
    );
};