import { useState } from "react";
import { db, collection, addDoc, getDocs   } from "fbase";
import NwitteList from 'components/NwitteList'

function Home() {
    const [nwitte, setNwitte] = useState('');
    // const [send, setSend] = useState('');
    
    const onChange = async (e) => {
        e.preventDefault();
        setNwitte(e.target.value);
    }
    const read = async () => {
        const querySnapshot = await getDocs(collection(db, "nweets"));
            querySnapshot.forEach((doc) => {
            console.log(`${doc.data()}`);
        });
    }
    const onClick = async ()=>{
        
        const params = {
            text: nwitte,
            createdAt: new Date()
        }
        try {
            const docRef = await addDoc(collection(db, "nweets"), params);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }


    return (
        <div>
            <NwitteList/>
            {/* <ul>
                <li></li>
            </ul>
            <button type="button" onClick={read}>READ</button> */}
            <hr />
            <div>
                <input type="text"  value={nwitte} onChange={onChange}/>
                <button type="button" onClick={onClick}>SEND</button>
            </div>
        </div>
    )
}

export default Home;
