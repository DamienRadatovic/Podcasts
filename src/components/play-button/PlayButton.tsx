import { FaPlay, FaPause  } from 'react-icons/fa';
import { useState } from 'react';

interface Props {
    onclick?: () => void,
}

const PlayButton = (props: Props) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleClickPlay = (): void => {
        setIsPlaying((prev) => !prev);
        if (props.onclick) {
            props.onclick();
        }
    };

    return <>
        <div onClick={handleClickPlay} className="play-button-container">
            {
                isPlaying ?
                    <FaPause />
                    :
                    <div className="svg-play">
                        <FaPlay/>
                    </div>
            }

        </div>
    </>;
};

export default PlayButton;