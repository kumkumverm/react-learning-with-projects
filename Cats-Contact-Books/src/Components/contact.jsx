export default function Contact(props) {
   
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="contacts">
                <img
                    src="./phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}