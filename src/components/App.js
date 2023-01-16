import AppRouter from './Router'
import {useEffect, useState} from 'react'
import { auth, onAuthStateChanged} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      
      if(user){
        console.log('user', user)
        setIsLoggedIn(user);
      }else{
        setIsLoggedIn(false);
        console.log('not user')
      }
      setInit(true);
    })
  }, [])
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
