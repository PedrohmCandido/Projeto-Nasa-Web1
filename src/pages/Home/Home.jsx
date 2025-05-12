import { Link, useNavigate } from "react-router-dom"
import './Home.css'
import image from '../../assets/earth-icon-2.png'
import image2 from '../../assets/apod-icon3.png'

export default function Home() {
    const navigate = useNavigate();
    return <div className="titulo">
        <h1>LEARN MORE ABOUT THE SPACE DAY BY DAY</h1>
        <div className="opcoes">
            <button onClick={() => navigate('/photo')}>
                <h3>Earth Photo of the Day</h3>
                <img src={image2} alt="image of the day icon" />
            </button>
            <button onClick={() => navigate('/earth')}>
                <h3>Earth 3D Model</h3>
                <img src={image} alt="earth image" />
            </button>
        </div>
    </div>
}