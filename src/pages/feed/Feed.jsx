import './feed.css'
import {useState, useEffect} from 'react'
import SingularPost from '../../components/singularPost/SingularPost'
import { doc, deleteDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const Feed = () => {
    
    const [feedArray, setFeedArray] = useState([]);

    const db = getFirestore();

    useEffect(()=>{
        const getData = async () => {
            const tempArray = []

            const querySnapshot = await getDocs(collection(db, "feed"))

            querySnapshot.forEach((doc) => {
                tempArray.push(doc);
            });
            setFeedArray(tempArray)
        }
        getData();

    }, [db])

    const handleDelete = async(id) => {
        const deleteDocRef = doc (db, 'feed', id)
        await deleteDoc(deleteDocRef);

        //manually deleting single post from feed array??
        setFeedArray((oldVal)=>oldVal.filter((item)=>item.id !== id)) 
    }

    let navigate = useNavigate();
  
    function handleGoHome() {
      navigate("/");
    }
    function handleGoPost() {
        navigate("/post");
    }

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
            <div className={theme}>
                <center>
                <h1>Welcome to Feed</h1>
                <button className='lightDark' onClick={handleLightDark}>{theme}</button>
                <br/>
                <button className='home' onClick={handleGoHome}>home</button>
                <button className='post' onClick={handleGoPost}>post</button>
                <br/>
                <br/>
                <div className='body'>
                    {
                        feedArray.map((post,index) => {
                            
                            return (
                                <span key = {index}>
                                    <SingularPost deleteFunction = {handleDelete} props = {post}/>
                                    <br/>
                                </span>
                            )
                        })
                    }
                </div>
                
                </center>
            </div>
        </>
    )
}

export default Feed;