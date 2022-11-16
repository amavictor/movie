import "./Loader.css"
export const Loader=()=>{
    return(
        <div className="scene">
            <div className="cube">
                <div className="cube__face cube__face--top"></div>
                <div className="cube__face cube__face--bottom"></div>
                <div className="cube__face cube__face--left"></div>
                <div className="cube__face cube__face--right"></div>
                <div className="cube__face cube__face--front"></div>
                <div className="cube__face cube__face--back"></div>
            </div>
        </div>
    )
}