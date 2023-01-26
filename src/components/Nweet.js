import { db, doc, deleteDoc, updateDoc, deleteField } from "fbase";


const Nweet = ({nweetObj, isOwner}) => {
    const onDeleteClick = async () => {
        if(window.confirm('삭제하시겠습니까?')){
            await deleteDoc(doc(db, "nweets", nweetObj.id));
        }
    }

    return (
        <li>
            {nweetObj.text}
            {
                isOwner && (
                    <>
                        <button onClick={onDeleteClick}>Delete</button>
                        <button>Edit</button>
                    </>
                )
            }
        </li>
    )
}
export default Nweet;