import './Home.css';
import HomeTop from '@/components/home/home-top/HomeTop.tsx';
import HomeMid from '@/components/home/home-mid/HomeMid.tsx';
import HomeBottom from '@/components/home/home-bottom/HomeBottom.tsx';

const Home = () => {
    return <>
        <div className="home-container">
            <HomeTop />
            <HomeMid />
            <HomeBottom />
        </div>
    </>;
};

export default Home;