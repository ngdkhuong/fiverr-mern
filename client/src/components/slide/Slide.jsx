import Slider from 'infinite-react-carousel';
import './Slide.scss';
import { cards } from '../../data';
import SlideCard from '../slideCard/SlideCard';

const Slide = () => {
    return (
        <div className="slide">
            <div className="container">
                <Slider>
                    {cards.map((card) => (
                        <SlideCard item={card} key={card.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;
