import './HomeTop.css';
import { SvgSubtitle, SvgTitle } from '@/components/SvgComponent.tsx';
import ActionButton from '@/components/action-button/ActionButton.tsx';
import { FaTiktok } from 'react-icons/fa6';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import ListPodcastBlock from '@/components/list-podcast-block/ListPodcastBlock.tsx';

const HomeTop = () => {
    const handleClickActionButton = (): void => {
        console.log('handleClickActionButton');
    };

    return <>
        <div className="home-title-container">
            <div className="home-title">
                <SvgTitle/>
            </div>
            <div className="subtitle-container">
                <SvgSubtitle/>
                <div className="subtitle-detail">
                    <p>Welcome to Podcast., where we bring you stimulating and inspiring podcasts from experts and
                        profiles extraordinaire.</p>
                </div>
            </div>
        </div>
        <div className="home-action-container">
            <div className="home-action-left">
                <p>Podcasts are a simple and powerful way to communicate information or share powerful emotions with the
                    world. Start an audio adventure!</p>
                <ActionButton onclick={handleClickActionButton} type={'classic'}>
                    Get Started
                </ActionButton>
                <div className="sponsor">
                    <h4>Support by</h4>
                    <div className="sponsor-list">
                        <div className="sponsor-name">
                            <FaTiktok/>
                            <h5>TikTok</h5>
                        </div>
                        <div className="sponsor-name">
                            <FaYoutube/>
                            <h5>Youtube</h5>
                        </div>
                        <div className="sponsor-name">
                            <FaSpotify/>
                            <h5>Spotify</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-action-right">
                <h3 className="list-title">Top Podcast of the week</h3>
                <ListPodcastBlock/>
            </div>
        </div>
        <div className="home-big-picture">
            <img
                src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/327659270/original/6f86c44d68faae9bbd8d0f0fbc734f36dea3176a.jpg"
                alt="home-gib-picture"/>
        </div>
    </>;
};

export default HomeTop;