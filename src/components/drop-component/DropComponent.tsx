import './DropComponent.css';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
    list: Array<{ label: string, value: string }>,
    selectedItem: { label: string, value: string }|null,
    onSelect: (selectedItem: { label: string, value: string }) => void,
}

const DropComponent = (props : Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: Event): void => {
        if (wrapperRef?.current && isOpen) {
            console.log('handleClickOutside');
            const target = e.target as Node;
            if (!wrapperRef.current.contains(target)) {
                setIsOpen(false);
            }
        }
    };

    const handleClickBlock = (): void => {
        console.log('handleClickBlock');
        setIsOpen((prev) => !prev);
    };

    const handleClickSelectItem = (item: { label: string, value: string }): void => {
        props.onSelect(item);
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
    
    return <>
        <div ref={wrapperRef} className="drop-component-container">
            <div className="drop-block-container" onClick={handleClickBlock}>
                {
                    props.selectedItem ?
                        <h3 className="selected">{props.selectedItem.label}</h3>
                        :
                        <h3>No item selected</h3>
                }
                <IoIosArrowDown className={isOpen ? 'rotate' : ''} />
            </div>
            <div
                className={`drop-component ${isOpen ? 'open' : 'close'}`}
            >
                <ul>
                    {
                        props.list.map((item) => (
                            <li key={item.value} onClick={() => handleClickSelectItem(item)}>
                                <h4>{item.label}</h4>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>;
};

export default DropComponent;