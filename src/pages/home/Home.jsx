import './home.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Home = () => {

    const [theme, setTheme] = useState('light');
    const handleLightDark = () => {
        if(theme ==='light'){
            setTheme('dark')
        }
        if(theme ==='dark'){
            setTheme('light')
        } 
    }

    return(
        <>
            <center className = {theme}>
                <h1>Social Media Savior</h1>
                <button className='lightDark' onClick={handleLightDark}>{theme}</button>
                <br/>
                <button><Link to = 'post'>Post</Link></button>
                <button><Link to = 'feed'>Feed</Link></button>
                <br/>
                <br/>
                <span className="circleBlack"></span>
                <br/>
                
            </center>
        </>

    )
}

export default Home;