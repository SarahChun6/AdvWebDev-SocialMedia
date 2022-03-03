import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <>
            <center>
                <h1>Social media savior</h1>
                <button><Link to = 'post'>Post</Link></button>
                <button><Link to = 'feed'>Feed</Link></button>
            </center>

        </>

    )
}

export default Home;