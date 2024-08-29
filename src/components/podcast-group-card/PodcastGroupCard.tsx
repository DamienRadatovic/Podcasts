import './PodcastGroupCard.css';
import PodcastGroupInterface from '@/interfaces/podcast-group.interface.ts';

interface Props {
    podcastGroup: PodcastGroupInterface,
    onClick: () => void,
}

const PodcastGroupCard = (props: Props) => {
    return <>
        <div className="podcast-group-card-container" onClick={props.onClick}>
            <img src={props.podcastGroup.imageUrl} alt={'podcast-group-image'} />
            <h3>{props.podcastGroup.title}</h3>
            <p>{props.podcastGroup.description}</p>
        </div>
    </>;
};

export default PodcastGroupCard;