import { useQuery } from '@tanstack/react-query';
import './GigCard.scss';
import { Link } from 'react-router-dom';
import newRequest from '../../utils/newRequest';

const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['gigUser'],
        queryFn: () =>
            newRequest.get(`/users/${item.userId}`).then((res) => {
                return res.data;
            }),
    });

    return (
        <Link to="/gig/123" className="link">
            <div className="gig-card">
                <img src={item.cover} alt="" />
                <div className="info">
                    {isLoading ? (
                        'loading'
                    ) : error ? (
                        'User not found'
                    ) : (
                        <div className="user">
                            <img src={data.img || '/img/noavatar.jpg'} alt="" />
                            <span>{data.username}</span>
                        </div>
                    )}
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="./img/star.png" alt="" />
                        <span>
                            {!isNaN(item.totalStars / item.starNumber) &&
                                (item.totalStars / item.starNumber).toFixed(1)}
                        </span>
                    </div>
                </div>
                <hr />
                <div className="details">
                    <img src="./img/heart.png" alt="" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;
