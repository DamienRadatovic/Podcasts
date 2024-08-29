import React, { useEffect, useRef, useState } from 'react';
import { BiSolidVolume, BiSolidVolumeFull, BiSolidVolumeLow, BiSolidVolumeMute } from 'react-icons/bi';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    volume: number,
}

const Volume = (props: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isOpenVolume, setIsOpenVolume] = useState<boolean>(false);

    const handleClickOutside = (e: Event) => {
        if (wrapperRef?.current) {
            const target = e.target as Node;
            if (!wrapperRef.current.contains(target)) {
                setIsOpenVolume(false);
            }
        }
    };

    const setVolumeIcon = () => {
        if (props.volume === 0) {
            return <BiSolidVolumeMute />;
        }
        
        if (props.volume === 1) {
            return <BiSolidVolumeFull />;
        }

        if (props.volume < 0.3) {
            return <BiSolidVolume />;
        }

        return <BiSolidVolumeLow />;
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
    
    return <>
        <div ref={wrapperRef} className="volume-container">
            <div className="volume-icon-container" onClick={() => setIsOpenVolume(!isOpenVolume)}>
                {setVolumeIcon()}
            </div>
            {
                isOpenVolume ?
                    <div className="volume-input-container">
                        <input
                            className="volume-bar"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={props.volume}
                            onChange={props.onChange}
                        />
                    </div> : null
            }
        </div>
    </>;
};

export default Volume;