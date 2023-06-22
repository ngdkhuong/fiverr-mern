import { useEffect, useRef, useState } from 'react';
import './Gigs.scss';
import GigCard from '../../components/gigCard/GigCard';
import { Link, useLocation } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

const Gigs = () => {
    const [sort, setSort] = useState('sales');
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    const { search } = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
        queryFn: () =>
            newRequest
                .get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
                .then((res) => {
                    return res.data;
                }),
    });

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        refetch();
    };

    return (
        <div className="gigs">
            <div className="container">
                <h1 className="breadcrumbs">
                    <Link to="/" className="link">
                        Liverr
                    </Link>{' '}
                    {'>'} Graphics & Design
                </h1>
                <h1>AI Artist</h1>
                <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
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
                    {isLoading
                        ? 'loading'
                        : error
                        ? 'Something went wrong!'
                        : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
