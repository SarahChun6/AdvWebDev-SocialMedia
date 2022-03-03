import './singularPost.css'
import {useState} from 'react'
import {doc, updateDoc, getFirestore} from 'firebase/firestore'

const SingularPost = ({props}) => {

    const author = props.data().author
    const message = props.data().message
    //const id = props.data().id;

    const[like,setLike] = useState(props.data().like)

    const db = getFirestore();

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
                    <button onClick = {handleLike}>{like}{' <3'}</button>
                    </div>
            </div>
        </>
    )
}

export default SingularPost;