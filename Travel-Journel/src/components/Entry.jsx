export default function MainContent(props) {
    return (
        <article className="journel-entry">
            <div className="main-img-container">
                <img className="main-image"
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                />
            </div>
            <div className="content">
                <div>
                    <img className="marker" src="./marker.png" alt="" />
                    <span className="country"> {props.entry.country.toUpperCase()}</span>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>
                    {props.entry.title} </h2>
                <p className="date-time">{props.entry.dates}</p>
                <p className="info">{props.entry.text}</p>
            </div>
        </article>
    )
}
