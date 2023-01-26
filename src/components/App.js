import AppRouter from './Router'
import {useEffect, useState} from 'react'
import { auth, onAuthStateChanged} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      
      if(user){
        setIsLoggedIn(user);
        setUserObj(user);
      }else{
        setIsLoggedIn(false)
        console.log('not user')
      }
      setInit(true);
    })
  }, [])
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
