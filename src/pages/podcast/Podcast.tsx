import './Podcast.css';
import useSWR from 'swr';
import PodcastListInterface from '@/interfaces/podcast-list.interface.ts';
import PodcastBlock from '@/components/podcast-block/PodcastBlock.tsx';
import { base64ToBlob } from '@/utils/audio.utils.ts';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Loader from '@/components/loader/Loader.tsx';
import { useEffect, useState } from 'react';

const staticFetcher = () => {
    return new Promise<PodcastListInterface>((resolve) => {
        setTimeout(() => resolve(podcastStatic), 500);
    });
};

const podcastStatic: PodcastListInterface = {
    podcastGroupId: 'podcastGroupId-1',
    podcastGroupTitle: 'How to make podcast quickly and easily?',
    imageUrl: 'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=600',
    podcastList: [
        {
            podcastId: 'podcast-1-podcastGroupId-1',
            podcastTitle: 'The subject!',
            podcastDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            podcastUrl: base64ToBlob('audio/mpeg'),
        },
        {
            podcastId: 'podcast-2-podcastGroupId-1',
            podcastTitle: 'The equipment!',
            podcastDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            podcastUrl: base64ToBlob('audio/mpeg'),
        },
        {
            podcastId: 'podcast-3-podcastGroupId-1',
            podcastTitle: 'Regularity!',
            podcastDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            podcastUrl: base64ToBlob('audio/mpeg'),
        },
        {
            podcastId: 'podcast-4-podcastGroupId-1',
            podcastTitle: 'Passion!',
            podcastDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            podcastUrl: base64ToBlob('audio/mpeg'),
        },
    ]
};

const Podcast = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useSWR<PodcastListInterface>(podcastStatic, staticFetcher);

    const [simulateLoading, setSimulateLoading] = useState(true);
    
    const handleBack = (): void => {
        navigate('/podcasts');
    };

    useEffect(() => {
        if (isLoading == false) {
            setTimeout(() => {
                setSimulateLoading(false);
            }, 500);
        }
    }, [isLoading]);
    
    return <>
        <div className="podcast-container">
            {
                error ? <div>Failed to fetch podcasts.</div> : null
            }
            {
                simulateLoading ? <Loader/> : null
            }
            <div className={`podcast-left-container ${simulateLoading ? 'simulate-loading-left' : ''}`}>
                <div className="ariane-back" onClick={handleBack}>
                    <FaArrowLeft/>
                    <h3>All podcasts</h3>
                </div>
                <img src={data?.imageUrl} alt={`minimal-img-${data?.podcastGroupId}`}/>
                <h2>{data?.podcastGroupTitle}</h2>
            </div>
            <div className={`podcast-right-container ${simulateLoading ? 'simulate-loading-right' : ''}`}>
                <div className="right-container">
                    {
                        data?.podcastList.map((podcast, index) => (
                            <PodcastBlock podcast={podcast} key={podcast.podcastId} index={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </>;
};

export default Podcast;