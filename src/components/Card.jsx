const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt={props.alt} />
                <div className="Card-content">
                    <h1>{props.title}</h1>
                    <h2>{props.album}</h2>
                    <button>Listen to Song</button>
                </div>
        </div>
    )
}

export default Card;