import { Link } from "react-router-dom"
import './Home.css'
import image from '../../assets/site-logo.png'

export default function Home() {
    return <div className="titulo">
        <h1>WELCOME TO OUR HOME</h1>
        <img src={image} alt="site-logo" style={{height: 150, width: 200}}/>
        <h2>What do you want to see today?</h2>
        <ul className="opcoes">
            <li><Link to='/photo' style={{textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center"}}>Photo of the day</Link></li>
            <li><Link to='/earth' style={{textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center"}}>Earth 3D Model</Link></li>
        </ul>
    </div>
}