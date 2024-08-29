import './PodcastsFilters.css';
import InputText from '@/components/input-text/InputText.tsx';
import DropComponent from '@/components/drop-component/DropComponent.tsx';
import { useEffect, useState } from 'react';

interface Props {
    onFiltersChange: (filters: { type: string, value: string}[]) => void,
}

const staticPodcasterList = [
    { label: 'Frederico', value: 'podcaster-1' },
    { label: 'Angèle', value: 'podcaster-2' },
    { label: 'Pierito', value: 'podcaster-3' },
    { label: 'Manuella', value: 'podcaster-4' },
];

const PodcastsFilters = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState<{ label: string, value: string }|null>(null);
    const [inputText, setInputText] = useState<string|null>(null);
    const [filters, setFilters] = useState<{ type: string, value: string}[]>([
        { type: 'text', value: '' },
        { type: 'podcaster', value: '' },
    ]);
    
    const handleChangeSearchPodcast = (value: string): void => {
        setInputText(value);
        setFilters((prev) => {
            return prev.map(filter =>
                filter.type === 'text'
                    ? { ...filter, value: value }
                    : filter
            );
        });
    };

    const handleSelectItem = (podcaster: { label: string, value: string }): void => {
        setSelectedItem(podcaster);
        setFilters((prev) => {
            return prev.map(filter =>
                filter.type === 'podcaster'
                    ? { ...filter, value: podcaster.value }
                    : filter
            );
        });
    };

    useEffect(() => {
        if (inputText || selectedItem) {
            props.onFiltersChange(filters);
        }
    }, [inputText, selectedItem]);

    return <>
        <div className="podcasts-filters-container">
            <InputText placeholder={'Search a podcast'} onChangeValue={handleChangeSearchPodcast} />
            <DropComponent
                list={staticPodcasterList}
                selectedItem={selectedItem}
                onSelect={handleSelectItem}
            />
        </div>
    </>;
};

export default PodcastsFilters;