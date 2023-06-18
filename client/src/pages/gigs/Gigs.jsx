import { useRef, useState } from 'react';
import './Gigs.scss';
import { gigs } from './../../data';
import GigCard from './../../components/gigCard/GigCard';
import { Link } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

const Gigs = () => {
    const [sort, setSort] = useState('sales');
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => newRequest('/gigs'),
    });

    console.log(data);

    return (
        <div className="gigs">
            <div className="container">
                <h1 className="breadcrumbs">
                    <Link to="/" className="link">
                        Liverr
                    </Link>
                    - Graphics & Design
                </h1>
                <h1>AI Artist</h1>
                <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budged</span>
                        <input ref={minRef} type="text" placeholder="min" />
                        <input ref={maxRef} type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sort-by">Sort By</span>
                        <span className="sort-type">{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
                        <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="right-menu">
                                {sort === 'sales' ? (
                                    <span onClick={() => reSort('createAt')}>Newest</span>
                                ) : (
                                    <span onClick={() => reSort('sales')}>Best Selling</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {gigs.map((gig) => (
                        <GigCard key={gig.id} item={gig} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
