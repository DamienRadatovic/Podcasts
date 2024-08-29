import React, { useState, useRef, useEffect } from 'react';
import './Player.css';
import Controls from '@/components/player/Controls.tsx';
import Waveform from "@/components/player/WaveForm.tsx";

interface Props {
    url: Blob;
    podcastId: string;
}

const Player = React.memo((props: Props) => {
    const audioRef = useRef<HTMLAudioElement|null>(null);
    
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            const handleDurationChange = () => {
                setDuration(audioRef.current?.duration || 0);
            };
            handleDurationChange();

            audioRef.current.addEventListener('loadedmetadata', handleDurationChange);
            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener('loadedmetadata', handleDurationChange);
                }
            };
        }
    }, []);

    return (
        <div className="audio-player">
            <audio
                ref={audioRef}
                src={URL.createObjectURL(props.url)}
            />
            <Waveform audioRef={audioRef} />
            <Controls
                podcastId={props.podcastId}
                duration={duration}
                audioRef={audioRef}
            />
        </div>
    );
});

export default Player;
