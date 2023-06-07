import './Message.scss';
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div className="message">
            <div className="container">
                <h2 className="breadcrumbs">
                    <Link to="/messages" className="link">
                        Message
                    </Link>
                    - Ryan
                </h2>
                <div className="messages">
                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/68107c6d32e28ad3a7ef371461a8e687-1648530113639/ed0a1f58-67e0-4db9-802f-f1c335dd0e80.jpg"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae in enim. Eaque
                            consequatur culpa ratione dicta, rerum unde! Magnam aperiam magni aspernatur excepturi
                            ipsum. Fugit sint consequatur eos eius.
                        </p>
                    </div>
                    <div className="item owner">
                        <img
                            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/68107c6d32e28ad3a7ef371461a8e687-1648530113639/ed0a1f58-67e0-4db9-802f-f1c335dd0e80.jpg"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae in enim. Eaque
                            consequatur culpa ratione dicta, rerum unde! Magnam aperiam magni aspernatur excepturi
                            ipsum. Fugit sint consequatur eos eius.
                        </p>
                    </div>
                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/68107c6d32e28ad3a7ef371461a8e687-1648530113639/ed0a1f58-67e0-4db9-802f-f1c335dd0e80.jpg"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae in enim. Eaque
                            consequatur culpa ratione dicta, rerum unde! Magnam aperiam magni aspernatur excepturi
                            ipsum. Fugit sint consequatur eos eius.
                        </p>
                    </div>
                    <div className="item owner">
                        <img
                            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/68107c6d32e28ad3a7ef371461a8e687-1648530113639/ed0a1f58-67e0-4db9-802f-f1c335dd0e80.jpg"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae in enim. Eaque
                            consequatur culpa ratione dicta, rerum unde! Magnam aperiam magni aspernatur excepturi
                            ipsum. Fugit sint consequatur eos eius.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder="Write a message..." id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Message;
