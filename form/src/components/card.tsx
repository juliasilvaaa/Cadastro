import '../css/style.css'
interface Card{
    isVisible: boolean
}

export default function Card({ isVisible}: Card){
    if(!isVisible){
        return null
    }
    return(
        <div className="card">
            <h1>ontúdo do card</h1>
            <p>OALOAOAOAAAAAAAAAAAAAAAAAAAAA</p>
           
        </div>
    )
}