import './Podcasts.css';
import PodcastsFilters from '@/components/podcasts-filters/PodcastsFilters.tsx';
import PodcastGroupInterface from '@/interfaces/podcast-group.interface.ts';
import PodcastGroupCard from '@/components/podcast-group-card/PodcastGroupCard.tsx';
import useSWR from 'swr';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '@/components/loader/Loader.tsx';

const staticFetcher = (): Promise<PodcastGroupInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(podcastsListStatic), 500);
    });
};

const podcastsListStatic: PodcastGroupInterface[] = [
    {
        id: 'podcastGroupId-1',
        title: 'How to make podcast quickly and easily?',
        imageUrl: 'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Learn the essentials of setting up your podcast with minimal effort. Perfect for beginners!'
    },
    {
        id: 'podcastGroupId-2',
        title: 'Mastering the Art of Storytelling',
        imageUrl: 'https://images.pexels.com/photos/7504929/pexels-photo-7504929.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Explore techniques to captivate your audience with compelling stories and narratives.'
    },
    {
        id: 'podcastGroupId-3',
        title: 'The Future of Technology in Media',
        imageUrl: 'https://images.pexels.com/photos/367903/pexels-photo-367903.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Delve into the latest advancements in technology and how they are reshaping the media landscape.'
    },
    {
        id: 'podcastGroupId-4',
        title: 'Building Your Personal Brand Online',
        imageUrl: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Learn strategies to create and grow a strong personal brand in the digital space.'
    },
    {
        id: 'podcastGroupId-5',
        title: 'Tips for Effective Remote Collaboration',
        imageUrl: 'https://images.pexels.com/photos/3966849/pexels-photo-3966849.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Discover best practices for working and collaborating effectively with remote teams.'
    },
    {
        id: 'podcastGroupId-6',
        title: 'Health and Wellness in the Digital Age',
        imageUrl: 'https://images.pexels.com/photos/4050294/pexels-photo-4050294.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Explore how digital tools can enhance your health and wellness in a fast-paced world.'
    },
    {
        id: 'podcastGroupId-7',
        title: 'Creative Marketing Strategies for Startups',
        imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Learn innovative marketing techniques that can help your startup stand out in a crowded market.'
    },
    {
        id: 'podcastGroupId-8',
        title: 'Financial Planning for Young Professionals',
        imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Get insights on managing your finances effectively early in your career.'
    },
    {
        id: 'podcastGroupId-9',
        title: 'Sustainability and the Future of Work',
        imageUrl: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Discuss how sustainable practices are transforming workplaces and industries.'
    },
    {
        id: 'podcastGroupId-10',
        title: 'The Power of Networking in the Digital Era',
        imageUrl: 'https://images.pexels.com/photos/374040/pexels-photo-374040.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Understand how to leverage digital tools to build and maintain a strong professional network.'
    }
];

const Podcasts = () => {
    const navigate = useNavigate();
    
    const [filters, setFilters] = useState<{ type: string, value: string}[]>([]); // État pour les filtres
    const buildQueryParams = (filters: { type: string, value: string}[]) => {
        const params = new URLSearchParams();
        filters.forEach(filter => {
            params.append(filter.type, filter.value);
        });
        return params.toString();
    };

    const { data, error, isLoading } = useSWR<PodcastGroupInterface[]>(
        `/api/podcasts?${buildQueryParams(filters)}`, 
        staticFetcher,
    );

    const handleOpenPodcast = (podcastGroupId: string): void => {
        navigate(`/podcasts/${podcastGroupId}`);
    };

    const handleFiltersChange = (newFilters: { type: string, value: string}[]): void => {
        setFilters(newFilters);
    };

    return <>
        <div className="podcasts-container">
            <div className="podcasts-container-title">
                <h2>Find all available podcasts</h2>
            </div>
            <PodcastsFilters onFiltersChange={handleFiltersChange} />
            <div className={`podcasts-container-list ${isLoading ? 'center-loader' : ''}`}>
                {
                    error ? <div>Failed to fetch podcasts.</div> : null
                }
                {
                    isLoading ?
                        <Loader />
                        :
                        data?.map((podcast: PodcastGroupInterface) => (
                            <PodcastGroupCard
                                key={podcast.id}
                                podcastGroup={podcast}
                                onClick={() => handleOpenPodcast(podcast.id)}
                            />
                        ))
                }
            </div>
        </div>
    </>;
};

export default Podcasts;