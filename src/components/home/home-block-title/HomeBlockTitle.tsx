import './HomeBlockTitle.css';
import ActionButton from '@/components/action-button/ActionButton.tsx';

interface Props {
    onClick: () => void;
    title: string;
    subtitle: string;
    style: 'revert' | 'classic'
}

const HomeBlockTitle = (props: Props) => {
    return <>
        <div className="home-title-block">
            <h2>{props.title}</h2>
            <div className="home-subtitle-block">
                <p>{props.subtitle}</p>
                <ActionButton onclick={props.onClick} type={props.style}>
                    See more
                </ActionButton>
            </div>
        </div>
    </>;
};

export default HomeBlockTitle;