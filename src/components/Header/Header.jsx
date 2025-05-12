import './Header.css';
import nasaLogo from '../../assets/nasa-logo2.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return <div className='header-container'>
        <img src={nasaLogo} alt="" />
        <h1>YOUR NASA LIBRARY</h1>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" , marginLeft: "auto", marginTop: 17, fontSize: 25}}>HOME</Link>
    </div>
}