import {useState, useEffect} from 'react'
import {doc, getFirestore, setDoc, addDoc, collection} from 'firebase/firestore' 
import {getAuth} from 'firebase/auth';

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
    
    return (
        <>
            <center className="postContainer">
                <h1>post</h1>
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