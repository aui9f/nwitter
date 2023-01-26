import { useEffect, useState } from "react";
import { db, collection, addDoc, doc, onSnapshot   } from "fbase";
import Nweet from 'components/Nweet'

//}
const Home = ({userObj}) => {
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);

    // const getNweets = async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, "nweets"));
    //             querySnapshot.forEach((doc) => {
    //                 const nweetObj = {...doc.data(), id: doc.id}
    //                 setNweets(prev=>[nweetObj, ...prev]);
    //             });
    //     } catch (error) {
            
    //     }
    // };

    const onSubmit = async (e) => {
        e.preventDefault();
        const params = {
            creatorId: userObj.uid,
            text: nweet,
            createdAt: new Date()
        }
        try {
            const docRef = await addDoc(collection(db, "nweets"), params);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        setNweet('')
    }

    

    const onChange = e => {
        e.preventDefault();
        const {target: {value}} = e;
        // const db = getDatabase();
        // const starCountRef = ref(db, 'nweets/');
        // onValue(starCountRef, (snapshot) => {
        //     const data = snapshot.val();
        //     console.log("data" , data)
        //   });

        
        setNweet(value)
    };
    const onClick = async () =>{
        
    }

    useEffect(()=>{
        // getNweets();-- 한번만 불러오기
        const unsub = onSnapshot(collection(db, "nweets"), (snapshot) => {
            const newArr = snapshot.docs.map(x=>({
                id: x.id,
                ...x.data(),
            }));
            setNweets(newArr);
        });
    }, []);
    

    
    return (
        <>
            <hr/>
            
            <ul>
                {nweets.map(nweet=>(
            
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId===userObj.uid}/>
                    // <li key={nweet.id}>{nweet.text}1</li>
                ))}
            </ul>
            <hr/>
            <form onSubmit={onSubmit}>
                <input type="text" value={nweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120}/>
                <input type="submit" value="nweet"/>
                <input type="button" value="read" onClick={onClick}/>
            </form>
        </>
    )
}
export default Home;
