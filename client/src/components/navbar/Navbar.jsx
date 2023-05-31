import './Navbar.scss';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
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
                    <span>Become a Seller</span>
                    <span>Sign in</span>
                    <button>Join</button>
                </div>

                <div>
                    <hr />
                    <div className="categories">
                        <span>Test</span>
                        <span>Test 1</span>
                        <span>Test 2</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
