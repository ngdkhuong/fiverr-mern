import './MyGigs.scss';
import { Link } from 'react-router-dom';

const MyGigs = () => {
    return (
        <div className="my-gigs">
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add">
                        <button>Add New Gigs</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148634416/original/8ba246bb778f365a85dc0267170ae0af4f6e61ef.jpg"
                                alt=""
                            />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className="delete" src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148634416/original/8ba246bb778f365a85dc0267170ae0af4f6e61ef.jpg"
                                alt=""
                            />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className="delete" src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                className="img"
                                src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148634416/original/8ba246bb778f365a85dc0267170ae0af4f6e61ef.jpg"
                                alt=""
                            />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img className="delete" src="/img/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default MyGigs;
