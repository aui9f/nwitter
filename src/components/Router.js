
import { Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';

import Navigation from 'components/Navigation'

const AppRouter = ({isLoggedIn, userObj}) => {

  return (
    <div>
      {isLoggedIn && <Navigation/>}  
      <Routes>
        {isLoggedIn?(
          <>
          <Route path="/" element={<Home userObj={userObj}/>} />
          <Route path="/profile" element={<Profile/>} />
          </>
        ):(<Route path="/" element={<Auth/>} />)}
        
        {/* <Route from="*" path="/"/>
          router version 6 에선 -- redirect 없ㅓ짐
        */}
        
          {/* { isLoggedIn
          ? (<>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
          </>)
          : (<Route path="/" element={<Auth/>} />)
          }

          <redirect from="*" to="/"></redirect>
          <Route path="/" element={<Home replace to="/"/>} /> */}

          
      </Routes>
    </div>
    
  );
};

export default AppRouter;