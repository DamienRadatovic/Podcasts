import './HomeBottom.css';
import HomeBlockTitle from '@/components/home/home-block-title/HomeBlockTitle.tsx';
import MinimalPodcastInterface from '@/interfaces/minimal-podcast.interface.ts';
import ItemPodcastBlock from '@/components/list-podcast-block/item-podcast-block/ItemPodcastBlock.tsx';
import useSWR from 'swr';
import Loader from '@/components/loader/Loader.tsx';
import { useNavigate } from 'react-router-dom';

const staticFetcher = (): Promise<MinimalPodcastInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(staticData), 500);
    });
};

const staticData: MinimalPodcastInterface[] = [
    {
        id: 'podcast-1',
        title: 'Jhon comedy sunday nigth',
        type: 'Comedy',
        imageUrl: 'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'podcast-2',
        title: 'Heavy weight',
        type: 'Society&Culture',
        imageUrl: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'podcast-3',
        title: 'EarHustle',
        type: 'Society&Culture',
        imageUrl: 'https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
        id: 'podcast-4',
        title: 'Where Should We Begin? With Esther Perel',
        type: 'Society&Culture',
        imageUrl: 'https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
        id: 'podcast-5',
        title: 'Stuff You Should Know',
        type: 'Society&Culture',
        imageUrl: 'https://images.unsplash.com/photo-1529220182440-a217aedfe80d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1pY3JvfGVufDB8MHwwfHx8Mg%3D%3D',
    },
    {
        id: 'podcast-6',
        title: '99% Invisible',
        type: 'Arts',
        imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm98ZW58MHwwfDB8fHwy',
    }
];

const HomeBottom = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useSWR<MinimalPodcastInterface[]>(staticData, staticFetcher);
    
    const handleClickReadMore = () => {
        navigate('/podcasts');
        window.scrollTo(0, 0);
    };

    return <>
        <div className="home-bottom-container">
            <HomeBlockTitle
                style={'classic'}
                onClick={handleClickReadMore}
                title="Top podcasts to discover"
                subtitle="Get started with easy tips and tools perfect for new podcasters. Everything you need to launch your first episode is right here!"
            />
            <div className="bottom-content">
                <ul>
                    {
                        error ? <div>Failed to fetch podcasts.</div> : null
                    }
                    {
                        isLoading ?
                            <Loader />
                            : 
                            data?.map((podcast: MinimalPodcastInterface, index: number) => (
                                <ItemPodcastBlock podcast={podcast} position={index + 1} key={podcast.id} />
                            ))
                    }
                </ul>
            </div>
        </div>
    </>;
};

export default HomeBottom;