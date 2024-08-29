import './ActionButton.css';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode,
    onclick: () => void,
    type: 'revert' | 'classic'
}

const ActionButton = (props: Props) => {
    return <>
        <div onClick={props.onclick} className={`action-button-container ${props.type === 'classic' ? 'classic' : 'revert'}`}>
            {props.children}
        </div>
    </>;
};

export default ActionButton;