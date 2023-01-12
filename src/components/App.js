import AppRouter from './Router'
import {useState} from 'react'
import { getAuth} from "firebase/auth";

function App() {
  // const auth = getAuth();
  
  
  const [isLoggedIn, setIsLoggedIn] = useState(getAuth.currentUser);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
