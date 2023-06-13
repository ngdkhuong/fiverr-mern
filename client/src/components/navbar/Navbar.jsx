import './Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import newRequest from '../../utils/newRequest';

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

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await newRequest.post('/auth/logout');
            localStorage.setItem('currentUser', null);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
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
                    {currentUser ? (
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
                                    <Link className="link" to="/logout" onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="link">
                                Sign in
                            </Link>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
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
                        <hr />
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
