import './InputText.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

interface InputTextProps {
    placeholder: string;
    onChangeValue: (value: string) => void;
    onFocus?: (state: boolean) => void;
    debounce?: number;
}

const InputText = (props: InputTextProps) => {
    const debounce = props.debounce || 500;
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onFocusElement = (state: boolean): void => {
        setIsFocused(state);
        props.onFocus?.(state);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            props.onChangeValue(inputValue);
        }, debounce);
        return () => clearTimeout(timeoutId);
    }, [inputValue, debounce]);
    
    return <>
        <div className={`input-text ${isFocused ? 'focus' : 'unFocus'}`}>
            <div className="search-svg">
                <IoIosSearch />
            </div>
            <input
                type="text"
                placeholder={props.placeholder}
                value={inputValue}
                onChange={handleChangeInputValue}
                onFocus={() => onFocusElement(true)}
                onBlur={() => onFocusElement(false)}
            />
        </div>
    </>;
};

export default InputText;