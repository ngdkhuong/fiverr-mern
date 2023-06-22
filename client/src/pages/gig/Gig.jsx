import { useQuery } from '@tanstack/react-query';
import './Gig.scss';
import { Slider } from 'infinite-react-carousel/lib';
import { Link, useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';

const Gig = () => {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ['gig'],
        queryFn: () =>
            newRequest.get(`/gigs/single/${id}`).then((res) => {
                return res.data;
            }),
    });

    return (
        <div className="gig">
            {isLoading ? (
                'loading'
            ) : error ? (
                'Something went wrong!'
            ) : (
                <div className="container">
                    <div className="left">
                        <span className="breadcrumbs">
                            <Link to="/" className="link">
                                Liverr
                            </Link>{' '}
                            {'>'} Graphics & Design
                        </span>
                        <h1>{data.title}</h1>
                        <div className="user">
                            <img
                                className="pp"
                                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c8cb3826d102b10d9e075b2c856ef051-1657379372214/e237ec5b-ec1b-44d3-9df9-debc1cf8091e.jpg"
                                alt=""
                            />
                            <span>Ryan</span>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                        </div>
                        <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                            {data.images.map((img) => {
                                <img key={img} src={img} alt="" />;
                            })}
                        </Slider>
                        <h2>About this gig</h2>
                        <p>{data.desc}</p>
                        <div className="seller">
                            <h2>About The Sellers</h2>
                            <div className="user">
                                <img
                                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c8cb3826d102b10d9e075b2c856ef051-1657379372214/e237ec5b-ec1b-44d3-9df9-debc1cf8091e.jpg"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Ryan</span>
                                    <div className="stars">
                                        <img src="/img/star.png" alt="" />
                                        <img src="/img/star.png" alt="" />
                                        <img src="/img/star.png" alt="" />
                                        <img src="/img/star.png" alt="" />
                                        <img src="/img/star.png" alt="" />
                                        <span>5</span>
                                    </div>
                                    <button>Contact Me</button>
                                </div>
                            </div>
                            <div className="box">
                                <div className="items">
                                    <div className="item">
                                        <span className="title">From</span>
                                        <span className="desc">USA</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Avg. response time</span>
                                        <span className="desc">2 hours</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Languages</span>
                                        <span className="desc">English</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Member since</span>
                                        <span className="desc">Sept 2019</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Last delivery</span>
                                        <span className="desc">about 5 hours</span>
                                    </div>
                                </div>
                                <hr />
                                <p>
                                    I'm an indie filmmaker and graphic designer and out of necessity have been creating
                                    movie posters for myself and the local indie film for the past 15 years.
                                </p>
                            </div>
                        </div>
                        <div className="reviews">
                            <h2>Reviews</h2>
                            <div className="item">
                                <div className="user">
                                    <img
                                        className="pp"
                                        src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/306c4c54217eaf37c256f81e5299d04f-1626343152945/92be3d55-ccfc-41d9-b0d4-510a34c4a346.png"
                                        alt=""
                                    />
                                    <div className="info">
                                        <span>John Doe</span>
                                        <div className="country">
                                            <img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                                alt=""
                                            />
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <p>
                                    This artist truly is gifted and he delivered the best experience I've ever had on
                                    Fivrr. I had a complex request, and I was shocked that not only did this artist get
                                    everything perfect the first time, but everything came out even better than I even
                                    pictured. I'm so happy. Hire this guy!
                                </p>
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <img src="/img/like.png" alt="" />
                                    <span>Yes</span>
                                    <img src="/img/dislike.png" alt="" />
                                    <span>No</span>
                                </div>
                            </div>
                            <hr />
                            <div className="item">
                                <div className="user">
                                    <img
                                        className="pp"
                                        src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/306c4c54217eaf37c256f81e5299d04f-1626343152945/92be3d55-ccfc-41d9-b0d4-510a34c4a346.png"
                                        alt=""
                                    />
                                    <div className="info">
                                        <span>John Doe</span>
                                        <div className="country">
                                            <img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                                alt=""
                                            />
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <p>
                                    This artist truly is gifted and he delivered the best experience I've ever had on
                                    Fivrr. I had a complex request, and I was shocked that not only did this artist get
                                    everything perfect the first time, but everything came out even better than I even
                                    pictured. I'm so happy. Hire this guy!
                                </p>
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <img src="/img/like.png" alt="" />
                                    <span>Yes</span>
                                    <img src="/img/dislike.png" alt="" />
                                    <span>No</span>
                                </div>
                            </div>
                            <hr />
                            <div className="item">
                                <div className="user">
                                    <img
                                        className="pp"
                                        src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/306c4c54217eaf37c256f81e5299d04f-1626343152945/92be3d55-ccfc-41d9-b0d4-510a34c4a346.png"
                                        alt=""
                                    />
                                    <div className="info">
                                        <span>John Doe</span>
                                        <div className="country">
                                            <img
                                                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                                alt=""
                                            />
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <p>
                                    This artist truly is gifted and he delivered the best experience I've ever had on
                                    Fivrr. I had a complex request, and I was shocked that not only did this artist get
                                    everything perfect the first time, but everything came out even better than I even
                                    pictured. I'm so happy. Hire this guy!
                                </p>
                                <div className="helpful">
                                    <span>Helpful?</span>
                                    <img src="/img/like.png" alt="" />
                                    <span>Yes</span>
                                    <img src="/img/dislike.png" alt="" />
                                    <span>No</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="price">
                            <h3>{data.shortTitle}</h3>
                            <h2>$ {data.price}</h2>
                        </div>
                        <p>{data.shortDesc}</p>
                        <div className="details">
                            <div className="item">
                                <img src="/img/clock.png" alt="" />
                                <span>{data.deliveryTime} days Delivery</span>
                            </div>
                            <div className="item">
                                <img src="/img/recycle.png" alt="" />
                                <span>{data.revisionNumber} Revisions</span>
                            </div>
                        </div>
                        <div className="features">
                            {data.features.map((feature) => {
                                <div className="item" key={feature}>
                                    <img src="/img/greencheck.png" alt="" />
                                    <span>{feature}</span>
                                </div>;
                            })}
                        </div>
                        <button>Continue</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gig;
