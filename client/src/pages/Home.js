import Cards from "./cards/cards.js"
export default function Home({flipped,onFlip}){

    return(
    <div className="home">
        <div className="card-container">
            <Cards onFlip flipped={flipped}/>
            <div className={`btn-container ${flipped==0 ? "flipped" : ""}`}>
                <div className="btn-flip-front" >
                    <button className="btn-flip" onClick={onFlip}>Contacts</button>
                </div>
                <div className="btn-flip-back">
                    <button className="btn-flip" onClick={onFlip}>Home</button> 
                </div>
            </div>
        </div>
    </div>
    )
}
