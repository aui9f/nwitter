import { useState } from "react";

import { db, collection, addDoc   } from "fbase";
//}
const Home = () => {
    const [nweet, setNweet] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const params = {
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
        
        // const dbRef = ref(getDatabase());
        // get(child(dbRef, `nweets`)).then((snapshot) => {
        // if (snapshot.exists()) {
        //     console.log(snapshot.val());
        // } else {
        //     console.log("No data available");
        // }
        // }).catch((error) => {
        // console.error(error);
        // });
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={nweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120}/>
            <input type="submit" value="nweet"/>
            <input type="button" value="read" onClick={onClick}/>

        </form>
    )
}
export default Home;
