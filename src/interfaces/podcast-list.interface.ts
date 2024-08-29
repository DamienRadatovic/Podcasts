import PodcastInterface from '@/interfaces/podcast.interface.ts';

interface PodcastListInterface {
    podcastGroupId: string,
    podcastGroupTitle: string,
    imageUrl: string,
    podcastList: PodcastInterface[]
}

export default PodcastListInterface;