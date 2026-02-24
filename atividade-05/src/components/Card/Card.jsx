import './Card.css'

function Card({image, title, text}) {
    return (
        <>
        <div class="card">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default Card