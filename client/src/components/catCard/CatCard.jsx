import { Link, useParams } from 'react-router-dom';
import './CatCard.scss';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

function CatCard({ card }) {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ['gigs'],
        queryFn: () =>
            newRequest.get(`/gigs`).then((res) => {
                return res.data;
            }),
    });

    console.log(data);

    return (
        <Link to={`/gigs`}>
            <div className="cat-card">
                <img src={card.img} alt="" />
                <span className="desc">{card.desc}</span>
                <span className="title">{card.title}</span>
            </div>
        </Link>
    );
}
export default CatCard;
