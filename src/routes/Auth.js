import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "fbase";


const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState('');

    const toggleAccount = () => setNewAccount((prev)=>!prev);

    const onChange = (event)=>{
        const {target: {name, value}} = event;
        if(name==='email'){
            setEmail(value);
        }else if(name==='password'){
            setPassword(value);
        }
    }

    const onSocialClick = async (event)=>{
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(result=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        })
    }

    const onSubmit = async (event)=>{
        event.preventDefault();
        try {
            // const auth = getAuth();
            let data ;
            if(newAccount){
                console.log("Create new Account", email, password);
                data = await createUserWithEmailAndPassword(auth, email, password)
            }else{
                console.log("Log In");
                data = await signInWithEmailAndPassword(auth ,email, password ).then(res=>{
                    console.log(res.user);
                })
            }   
            console.log("data", data);  
        } catch (error) {
            setError(error.message);
        }
        
       
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={onSubmit}>
            <input name="email" type="email" placeholder="Email" 
                required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Email" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? 'Create Account': 'Log In'}/>
            </form>
            
            <span onClick={toggleAccount}>
                {newAccount?'Sign In':'Create Account'}
            </span>

            <div>
                {/* <p>toggleAccount</p> */}
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <p>{error || ''}</p>
            </div>
        </div>
    )
}
export default Auth;