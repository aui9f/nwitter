import {auth, signOut} from 'fbase';
import {useNavigate} from 'react-router-dom'


// import { Navigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick =() => {
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <>
            <button onClick={onLogOutClick}>Logout</button>
        </>
    )
}
export default Profile;
