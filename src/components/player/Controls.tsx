import React, { useState, MutableRefObject, useEffect } from 'react';
import './Player.css';
import { useAudioPlayerContext } from '@/contexts/audio-player.context.tsx';
import { FaPlay, FaPause } from 'react-icons/fa';
import Volume from '@/components/player/Volume.tsx';

interface Props {
    audioRef: MutableRefObject<HTMLAudioElement | null>;
    duration: number;
    podcastId: string;
}

const Controls = (props: Props) => {
    const {
        audioRefs,
        setAudioRefsCallbacks,
        playAudioRefs,
        pauseAudioRefs,
        enablePlaying,
    } = useAudioPlayerContext();

    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);
    const [seekValue, setSeekValue] = useState(0);
    
    const handlePlayPause = () => {
        if (props.audioRef.current) {
            if (audioRefs.find((elt) => elt.element === props.audioRef.current)?.isActive) {
                pauseAudioRefs(props.audioRef.current);
            } else {
                playAudioRefs(props.audioRef.current);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (props.audioRef.current) {
            if (props.audioRef.current.currentTime === props.audioRef.current.duration) {
                enablePlaying();
            }
            setCurrentTime(props.audioRef.current.currentTime);
            setSeekValue(props.audioRef.current.currentTime / props.audioRef.current.duration);
        }
    };

    const handleSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.audioRef.current) {
            const seekTo = Number(event.target.value) * props.audioRef.current.duration;
            props.audioRef.current.currentTime = seekTo;
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.audioRef.current) {
            const newVolume = Number(event.target.value);
            props.audioRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    useEffect(() => {
        if (props.audioRef.current) {
            setAudioRefsCallbacks(props.audioRef.current, props.podcastId);
            props.audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (props.audioRef.current) {
                props.audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return <>
        <div className="controls-container">
            <div className="play-pause-container" onClick={handlePlayPause}>
                {
                    audioRefs.find((elt) => elt.element === props.audioRef.current)?.isActive
                        ? <FaPause /> : <FaPlay />
                }
            </div>
            <div className="time-info">
                <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
                <span>/</span>
                <span>{Math.floor(props.duration / 60)}:{Math.floor(props.duration % 60).toString().padStart(2, '0')}</span>
            </div>
            <input
                className="seek-bar"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={seekValue ? seekValue : 0}
                onChange={handleSeekChange}
            />
            <Volume volume={volume} onChange={handleVolumeChange} />
        </div>
    </>;
};

export default Controls;
