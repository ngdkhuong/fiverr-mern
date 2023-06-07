import './Orders.scss';
import { Link } from 'react-router-dom';

const Orders = () => {
    const currentUser = {
        id: 1,
        username: 'John Doe',
        isSeller: true,
    };

    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
                        <th>Contact</th>
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
                            <img className="message" src="/img/message.png" alt="" />
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
                            <img className="message" src="/img/message.png" alt="" />
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
                            <img className="message" src="/img/message.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Orders;
