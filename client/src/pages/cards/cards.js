import "./cards.css";
//Home and Contacs Cards
function cards({flipped}){
    return(
    <div className="landing-page">
        <div className={`cards ${flipped==0 ? "flipped" : ""}`}>
            <div className="card-front">
                <div className="logo-front">
                    <h1>Daryl G. Guzman</h1>
                    <h3>Developer</h3>
                </div>
            </div>
            <div className="card-back">
                <div className="contact-details">
                    <h3>darylgzmn@gmail.com</h3>
                    <h3>09557036058</h3>
                </div>

            </div>
        </div>
    </div>
    )
}

export default cards;
