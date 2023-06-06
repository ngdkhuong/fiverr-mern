import './Gig.scss';
import { Slider } from 'infinite-react-carousel';

const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">Liverr - Graphics & Design</span>
                    <h1>I will create AI generated art for you.</h1>
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
                        <img
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300202085/original/b61de2cc456aa6fa76b50679a108f7465a34af83/create-art-based-on-your-imagination.png"
                            alt=""
                        />
                        <img
                            src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c8fa3f07eec6f274e51d374fb4d6a535-1685671136/FutureTech2_v2/create-art-based-on-your-imagination.jpg"
                            alt=""
                        />
                        <img
                            src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/7d40b408fd9a6401230cca02e43c7dce-1685248912/FutureTech_v2/create-art-based-on-your-imagination.jpg"
                            alt=""
                        />
                    </Slider>
                    <h2>About this gig</h2>
                    <p>
                        I'm a child of the 80's who's been trained by books and movies to fear the computer take over.
                        In order to prevent this I've decided to fight the enemy from the inside by embracing the
                        machine and diving straight into this AI phenomena. I'm a graphic artist, photographer and
                        filmmaker with over 20 years of experience. I've been enthusiastically following AI art
                        generators since they emerged. As an artist I find it to be an amazing tool for creating. From
                        concept art to fantastic pieces that can be framed and displayed, I want to make something cool
                        for you.
                    </p>
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
                                This artist truly is gifted and he delivered the best experience I've ever had on Fivrr.
                                I had a complex request, and I was shocked that not only did this artist get everything
                                perfect the first time, but everything came out even better than I even pictured. I'm so
                                happy. Hire this guy!
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
                                This artist truly is gifted and he delivered the best experience I've ever had on Fivrr.
                                I had a complex request, and I was shocked that not only did this artist get everything
                                perfect the first time, but everything came out even better than I even pictured. I'm so
                                happy. Hire this guy!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="./img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="./img/dislike.png" alt="" />
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
                                This artist truly is gifted and he delivered the best experience I've ever had on Fivrr.
                                I had a complex request, and I was shocked that not only did this artist get everything
                                perfect the first time, but everything came out even better than I even pictured. I'm so
                                happy. Hire this guy!
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
                        <h3>1 AI generated image</h3>
                        <h2>$ 59.99</h2>
                    </div>
                    <p>
                        An AI image based on your idea. Not for overly detailed ideas with multiple specific characters.
                    </p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Artwork delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Image upscaling</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Gig;
