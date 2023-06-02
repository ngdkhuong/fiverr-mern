import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

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
        <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <Link className="link" to="/">
                        <span className="text">liverr</span>
                    </Link>
                    <span className="dot">.</span>
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
                                            <Link className="link" to="/mygigs">
                                                Gigs
                                            </Link>
                                            <Link className="link" to="/add">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link className="link" to="/orders">
                                        Orders
                                    </Link>
                                    <Link className="link" to="/messages">
                                        Message
                                    </Link>
                                    <Link className="link" to="/settings">
                                        Settings
                                    </Link>
                                    <Link className="link" to="/logout">
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div>
                {(active || pathname !== '/') && (
                    <>
                        <hr />
                        <div className="categories">
                            <Link className="link cateLink" to="/">
                                Graphic & Design
                            </Link>
                            <Link className="link cateLink" to="/">
                                Digital Marketing
                            </Link>
                            <Link className="link cateLink" to="/">
                                Writing & Translation
                            </Link>
                            <Link className="link cateLink" to="/">
                                Video & Animation
                            </Link>
                            <Link className="link cateLink" to="/">
                                Music & Audio
                            </Link>
                            <Link className="link cateLink" to="/">
                                Programming & Tech
                            </Link>
                            <Link className="link cateLink" to="/">
                                Photography
                            </Link>
                            <Link className="link cateLink" to="/">
                                Business
                            </Link>
                            <Link className="link cateLink" to="/">
                                AI Services
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
