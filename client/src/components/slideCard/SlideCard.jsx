import './SlideCard.scss';
import { Link } from 'react-router-dom';

const SlideCard = ({ item }) => {
    return (
        <Link to="/gigs?card=design">
            <div className="slide-card">
                <img src={item.img} alt="" />
                <span className="desc">{item.desc}</span>
                <span className="title">{item.title}</span>
            </div>
        </Link>
    );
};

export default SlideCard;
