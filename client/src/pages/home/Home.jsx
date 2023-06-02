import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/strustedBy/TrustedBy';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide />
        </div>
    );
};

export default Home;
