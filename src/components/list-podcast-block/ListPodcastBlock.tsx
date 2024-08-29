import './ListPodcastBlock.css';
import useSWR from 'swr';
import ItemPodcastBlock from '@/components/list-podcast-block/item-podcast-block/ItemPodcastBlock.tsx';
import MinimalPodcastInterface from '@/interfaces/minimal-podcast.interface.ts';
import Loader from '@/components/loader/Loader.tsx';

const staticFetcher = (): Promise<MinimalPodcastInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(staticData), 500);
    });
};

const staticData: MinimalPodcastInterface[] = [
    {
        id: 'podcast-1',
        title: 'Podcast 1',
        type: 'Comedy',
        imageUrl: 'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'podcast-2',
        title: 'Podcast 2',
        type: 'Society&Culture',
        imageUrl: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 'podcast-3',
        title: 'Podcast 3',
        type: 'Society&Culture',
        imageUrl: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
];


const ListPodcastBlock = () => {
    const { data, error, isLoading } = useSWR<MinimalPodcastInterface[]>(staticData, staticFetcher);

    if (error) return <div>Failed to fetch top podcast.</div>;
    if (isLoading) return <Loader />;

    return <>
        <ul className="list-podcast-block">
            {
                data?.map((podcast: MinimalPodcastInterface, index: number) => (
                    <ItemPodcastBlock podcast={podcast} position={index + 1} key={podcast.id} />
                ))
            }
        </ul>
    </>;
};

export default ListPodcastBlock;
