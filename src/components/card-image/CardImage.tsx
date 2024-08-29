import './CardImage.css';

interface Props {
    card: {
        title: string,
        description: string,
        imageUrl: string,
    }
}

const CardImage = (props: Props) => {
    return <>
        <div className="card-image-container">
            <img src={props.card.imageUrl} alt="img-card"/>
            <div className="card-container">
                <h2>{props.card.title}</h2>
                <h4>{props.card.description}</h4>
            </div>
        </div>
    </>;
};

export default CardImage;