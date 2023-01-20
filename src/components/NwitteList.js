import { useState } from "react";
import { db, doc, collection, getDocs   } from "fbase";

const NwitteList = () => {
    const [list, setList] = useState([]);
    
    const test = async () => {
        const querySnapshot = await getDocs(collection(db, "nweets"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.data().text}`)
                // console.log(`${doc.id} => ${JSON.stringify(doc.data())} `);
            });
    }

    test();
    return (
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    )
}

export default NwitteList