import { useState } from 'react';
import './Gigs.scss';

const Gigs = () => {
    const [sort, setSort] = useState('sales');
    const [open, setOpen] = useState(false);

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">Liverr - Graphics & Design </span>
                <h1>AI Artist</h1>
                <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budged</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
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
            </div>
        </div>
    );
};

export default Gigs;
