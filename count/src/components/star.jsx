import starFilled from "/star-filled.png"
import starEmpty from "/star-empty.png"
export default function Stars(props) {
    let StarIcon=props.isFilled?starFilled:starEmpty;
    return(
    <button
    onClick={props.handleClick}
        aria-pressed={props.isFavorite}
        aria-label={props.isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="favorite-button"
    >
        <img
            src={StarIcon}
            alt={props.isFavorite ? "filled star icon" : "empty star icon"}
            className="favorite"
        />
    </button>
    )
}
