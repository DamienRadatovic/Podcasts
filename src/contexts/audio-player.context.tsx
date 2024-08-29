import {
    createContext,
    useContext,
    useState,
    ReactNode, useCallback,
} from 'react';

export interface AudioRef {
    id: string,
    element: HTMLAudioElement,
    isActive: boolean,
}

interface AudioPlayerContextType {
    audioRefs: AudioRef[];
    setAudioRefsCallbacks: (ref: HTMLAudioElement, id: string) => void;
    playAudioRefs: (currentRef: HTMLAudioElement) => void;
    pauseAudioRefs: (currentRef: HTMLAudioElement) => void;
    enablePlaying: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider = ({ children }: { children: ReactNode; }) => {
    const [audioRefs, setAudioRefs] = useState<AudioRef[]>([]);

    const setAudioRefsCallbacks = useCallback((newRef: HTMLAudioElement, podcastId: string) => {
        setAudioRefs((refs: AudioRef[]) => {
            const isAlreadyInRefs = refs.some(ref => ref.element === newRef);

            if (isAlreadyInRefs) {
                return refs;
            }

            return [
                ...refs,
                {
                    id: podcastId,
                    element: newRef,
                    isActive: false,
                },
            ];
        });
    }, []);

    const playAudioRefs = (currentRef: HTMLAudioElement): void => {
        audioRefs.forEach((ref: AudioRef) => {
            if (ref.element !== currentRef) {
                ref.element.pause();
                setAudioRefs((prev) => prev.map((elt) => {
                    if (elt === ref) {
                        return {
                            ...elt,
                            isActive: false,
                        };
                    }
                    return elt;
                }));
            } else {
                ref.element.play();
                setAudioRefs((prev) => prev.map((elt) => {
                    if (elt === ref) {
                        return {
                            ...elt,
                            isActive: true,
                        };
                    }
                    return elt;
                }));
            }
        });
    };
    
    const pauseAudioRefs = (currentRef: HTMLAudioElement): void => {
        audioRefs.forEach((ref: AudioRef) => {
            if (ref.element === currentRef) {
                ref.element.pause();
                setAudioRefs((prev) => prev.map((elt) => {
                    if (elt === ref) {
                        return {
                            ...elt,
                            isActive: false,
                        };
                    }
                    return elt;
                }));
            }
        });
    };

    const enablePlaying = (): void => {
        setAudioRefs((prev) => prev.map((elt) => {
            return {
                ...elt,
                isActive: false,
            };
        }));
    };

    return (
        <AudioPlayerContext.Provider value={{
            audioRefs,
            setAudioRefsCallbacks,
            playAudioRefs,
            pauseAudioRefs,
            enablePlaying,
        }}>
            {children}
        </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayerContext = (): AudioPlayerContextType => {
    const context = useContext(AudioPlayerContext);

    if (context === undefined) {
        throw new Error(
            'useAudioPlayerContext must be used within an AudioPlayerProvider'
        );
    }

    return context;
};