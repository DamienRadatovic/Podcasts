import './ItemPodcastBlock.css';
import MinimalPodcastInterface from '@/interfaces/minimal-podcast.interface.ts';
import PlayButton from '@/components/play-button/PlayButton.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
    podcast: MinimalPodcastInterface,
    position: number;
}

const ItemPodcastBlock = (props: Props) => {
    const navigate = useNavigate();

    const handleClickPlay = (): void => {
        navigate(`/podcasts/${props.podcast.id}`);
        window.scrollTo(0, 0);
    };

    return <>
        <li className="item-podcast-block-container" onClick={handleClickPlay}>
            <h3 className="position">{ props.position.toString().padStart(2, '0') }.</h3>
            <div className="image-podcast-block">
                <img src={props.podcast.imageUrl} alt={`minimal-img-${props.podcast.id}`}/>
            </div>
            <div className="item-podcast-content">
                <h4>{props.podcast.title}</h4>
                <h5>#{props.podcast.type}</h5>
            </div>
            <div className="block-play">
                <PlayButton />
            </div>
        </li>
    </>;
};

export default ItemPodcastBlock;
