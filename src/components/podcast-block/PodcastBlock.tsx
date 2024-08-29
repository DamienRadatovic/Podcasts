import './PodcastBlock.css';
import PodcastInterface from '@/interfaces/podcast.interface.ts';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import Player from '@/components/player/Player.tsx';
import { useEffect, useState } from 'react';
import { AudioRef, useAudioPlayerContext } from '@/contexts/audio-player.context.tsx';
import AnimatedPlay from '@/components/animated-play/AnimatedPlay.tsx';

interface Props {
    podcast: PodcastInterface,
    index: number,
}

const PodcastBlock = (props: Props) => {
    const { audioRefs } = useAudioPlayerContext();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickDeploy = (): void => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (props.index === 0) {
            setIsOpen(true);
        }
    }, []);
    
    return <>
        <div className={`podcast-block-container ${isOpen ? 'podcast-open' : ''}`}>
            <div className="podcast-title-container" onClick={handleClickDeploy}>
                <div className="title-container">
                    {audioRefs.find((audio: AudioRef) => audio.id === props.podcast.podcastId)?.isActive ? <AnimatedPlay/> : null}
                    <h3>{props.podcast.podcastTitle}</h3>
                </div>
                {
                    isOpen === false ?
                        <div className="icon">
                            <FaPlus/>
                        </div>
                        :
                        <div className="icon">
                            <FaMinus />
                        </div>
                }
            </div>
            <div className="podcast-description-container">
                <div className="separator"></div>
                <p>{props.podcast.podcastDescription}</p>
                <Player url={props.podcast.podcastUrl} podcastId={props.podcast.podcastId} />
            </div>
        </div>
    </>;
};

export default PodcastBlock;