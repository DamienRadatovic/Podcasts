import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WaveformProps {
    audioRef: React.RefObject<HTMLAudioElement>;
}

const Waveform: React.FC<WaveformProps> = (props: WaveformProps) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const waveSurferRef = useRef<WaveSurfer | null>(null);

    useEffect(() => {
        if (waveformRef.current && props.audioRef.current) {
            waveSurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'rgba(151, 150, 155, 1)',
                progressColor: 'rgba(205, 78, 60, 1)',
                cursorColor: '#ff6600',
                barWidth: 3,
                barRadius: 30,
                height: 100,
                barGap: 5,
                normalize: true,
                backend: 'MediaElement',
                mediaControls: false,
                media: props.audioRef.current,
                barAlign: 'bottom',
            });

            // Cleanup
            return () => {
                waveSurferRef.current?.destroy();
            };
        }
    }, [props.audioRef, waveformRef]);

    return <div className="waveform" ref={waveformRef} />;
};

export default Waveform;
