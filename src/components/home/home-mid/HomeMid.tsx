import './HomeMid.css';
import CardImage from '@/components/card-image/CardImage.tsx';
import HomeBlockTitle from '@/components/home/home-block-title/HomeBlockTitle.tsx';
import { useNavigate } from 'react-router-dom';

const HomeMid = () => {
    const navigate = useNavigate();
    
    const cardsImage = {
        card1: {
            title: 'How to make podcast easy',
            description: 'Learn the essentials of setting up your podcast with minimal effort. Perfect for beginners!',
            imageUrl: 'https://images.pexels.com/photos/2101488/pexels-photo-2101488.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        card2: {
            title: 'How to keep your audience',
            description: 'Explore techniques to engage and retain your podcast listeners over the long term.',
            imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1pY3JvfGVufDB8MHwwfHx8Mg%3D%3D',
        },
        card3: {
            title: 'Choosing the Right Equipment',
            description: 'A guide to selecting the best microphones, headphones, and software for your podcast setup.',
            imageUrl: 'https://images.unsplash.com/photo-1476136236990-838240be4859?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pY3JvfGVufDB8fDB8fHwy',
        },
        card4: {
            title: 'The Art of Storytelling',
            description: 'Master the craft of storytelling to make your podcast episodes compelling and unforgettable.',
            imageUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        card5: {
            title: 'Promoting Your Podcast',
            description: 'Discover effective strategies for marketing your podcast and growing your audience.',
            imageUrl: 'https://images.unsplash.com/photo-1554941426-5eb1f0a4e107?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxtaWNyb3xlbnwwfHwwfHx8Mg%3D%3D',
        }
    };

    const handleClickReadMore = () => {
        navigate('/blog');
        window.scrollTo(0, 0);
    };

    return <>
        <div className="home-mid-container">
            <HomeBlockTitle
                style={'revert'}
                onClick={handleClickReadMore}
                title="Best news for beginners"
                subtitle="Get started with easy tips and tools perfect for new podcasters. Everything you need to launch your first episode is right here!"
            />
            <div className="mid-content">
                <div className="content">
                    <CardImage card={cardsImage.card1}/>
                </div>
                <div className="content">
                    <CardImage card={cardsImage.card2}/>
                </div>
                <div className="content">
                    <CardImage card={cardsImage.card3}/>
                </div>
                <div className="content">
                    <CardImage card={cardsImage.card4}/>
                </div>
                <div className="content">
                    <CardImage card={cardsImage.card5}/>
                </div>
            </div>
        </div>
    </>;
};

export default HomeMid;