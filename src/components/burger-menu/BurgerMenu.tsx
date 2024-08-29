import './BurgerMenu.css';

interface Props {
    onClick:  () => void,
}

const BurgerMenu = (props: Props) => {
    return <>
        <label className="burger" htmlFor="burger">
            <input onClick={props.onClick} type="checkbox" id="burger"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    </>;
};

export default BurgerMenu;