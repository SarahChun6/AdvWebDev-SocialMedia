import './singularPost.css'
import {useState} from 'react'
import {doc, updateDoc, getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const SingularPost = ({props, deleteFunction}) => {
    //props is the data of the document that is passed in
    //react can pass in functions as parameters

    const author = props.data().author
    const message = props.data().message
    const authorUID = props.data().uid
    const auth = getAuth();
    const db = getFirestore();

    const[like,setLike] = useState(props.data().like)
    //const[mathcUID, setMatchUID] = useState(false)


    const handleLike = async() =>{
        const docRef = doc(db, 'feed', props.id)
        await updateDoc(docRef,{
            like: like+1
        })
        setLike(like+1)
    }
   

    return(
        <>
            <div className = 'singular-post-container'>
                <h3>{message}</h3>
                <br/>
                <div className = 'authorButton-container'>
                    <h4>{author}</h4>
                    <button className='heart' onClick = {handleLike}>{like}</button>
                    {authorUID === auth.currentUser.uid && <button className = 'delete' onClick = {()=>deleteFunction(props.id)}>X</button>}
                    {console.log(authorUID === auth.currentUser.uid)}
                </div>
            </div>
        </>
    )
}

export default SingularPost;