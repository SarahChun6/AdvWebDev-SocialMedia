import {useState, useEffect} from 'react';
import {doc, getFirestore, setDoc, addDoc, collection} from 'firebase/firestore' 
import {getAuth} from 'firebase/auth';
import { useNavigate } from "react-router-dom";


const Post = () =>{

    
    const [message, setMessage] = useState('');
    const db = getFirestore();
    const auth = getAuth();

    //auth.signOut();

    const handleMessageSend = async() => {
        const collectionRef = collection(db, 'feed');
        await addDoc(collectionRef, {
            message: message,
            author: auth.currentUser.displayName,
            like: 0,
            uid: auth.currentUser.uid,
        })
        setMessage('')
    }

    useEffect(
    () => {
        const docRef = doc(db,'users', auth.currentUser.uid)
        setDoc(docRef, {
            name: auth.currentUser.displayName,
        })

        
    }, [db, auth])
    
    
    let navigate = useNavigate();
  
    function handleGoHome() {
      navigate("/");
    }
    function handleGoFeed() {
        navigate("/feed");
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
    
    return (
        <>
            <center className={theme}>
                <h1>post</h1>
                <button className='lightDark' onClick={handleLightDark}>{theme}</button>
                <br/>
                <button onClick={handleGoHome}>home</button>
                <button onClick={handleGoFeed}>feed</button>
                <br/>
                <br/>
                <input type = 'text' placeholder='Enter a message' value = {message} 
                onChange = {(e) => setMessage(e.target.value)}/>
                <button onClick = {handleMessageSend}>send</button>
                <br/>
                <button onClick = {() => {auth.signOut()}}>sign out</button>
            </center>
        </>
    )
}

export default Post