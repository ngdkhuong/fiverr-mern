import './Navbar.scss';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: 'Ryan',
        isSeller: true,
    };

    return (
        <div className={active ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    <span>Sign in</span>
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add New Gig</span>
                                        </>
                                    )}
                                    <span>Orders</span>
                                    <span>Message</span>
                                    <span>Settings</span>
                                    <span>Logout</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div>
                {active && (
                    <>
                        <hr />
                        <div className="categories">
                            <span>Test</span>
                            <span>Test 1</span>
                            <span>Test 2</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
