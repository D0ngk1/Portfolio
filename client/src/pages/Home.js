import Cards from "./cards/cards.js"
export default function Home({flipped,onFlip}){

    return(
        <div className="home">
            <div className="card-container1">
                <div className={`btn-container ${flipped==0 ? "flipped" : ""}`}>
                    <div className="btn-flip-front" >
                        <button className="btn-flip" onClick={onFlip}>PROJECTS</button>
                    </div>
                    <div className="btn-flip-back">
                        <button className="btn-flip" onClick={onFlip}>HOME</button> 
                    </div>
                </div>
                <Cards onFlip flipped={flipped}/>
            </div>
        </div>
    )
}
