import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/strustedBy/TrustedBy';
import './Home.scss';
import { cards } from './../../data';
import SlideCard from '../../components/slideCard/SlideCard';

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <SlideCard item={card} key={card.id} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>The best part? Everything.</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Stick to your budget
                        </div>
                        <p>
                            Find the right service for every price point. No hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get quality work done quickly
                        </div>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Pay when you're happy
                        </div>
                        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on 24/7 support
                        </div>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>fiverr business.</h1>
                        <h1>A business solution designed for teams</h1>
                        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Talent matching
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Dedicated account management
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Team collaboration tools
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Business payment solutions
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img src="./img/business.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
