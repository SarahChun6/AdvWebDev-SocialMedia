import './feed.css'
import {useState, useEffect} from 'react'
import SingularPost from '../../components/singularPost/SingularPost'
import { doc, deleteDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

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

    return(
        <>
            <center>
                <h1>Welcome to Feed</h1>
                <br/>

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
            </center>
        </>
    )
}

export default Feed;