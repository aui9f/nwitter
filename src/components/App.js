import AppRouter from './Router'
import {useEffect, useState} from 'react'
import { auth } from "firebase.js";

function App() {
  // c
  // console.log(user.email)
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // setInterval(()=>{
  //   const user = auth.currentUser;
  //   console.log("user", user)
  // },2000)

  useEffect(()=>{
    const user = auth.currentUser;
    if (user) {
      console.log("IF");
      setIsLoggedIn(user);
    } else {
      console.log("ELSE");
      setIsLoggedIn(false);
      // No user is signed in.
    }
    setInit(true);
  // 
  }, [])
  return (
    <>
      {/* <AppRouter isLoggedIn={isLoggedIn}/> */}
      {init?<AppRouter isLoggedIn={isLoggedIn}/>:'Initializing..'}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
