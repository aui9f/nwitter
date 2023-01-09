import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true)

    const toggleAccount = () => setNewAccount((prev)=>!prev);

    const onChange = (event)=>{
        
        const {target: {name, value}} = event;

        if(name==='email'){
            console.log('email', value)
            setEmail(value);
        }else if(name==='password'){
            setPassword(value);
        }

    }

    const onSubmit = async (event)=>{
        event.preventDefault();
        try {
            let data ;
            if(newAccount){
                console.log("Create new Account");
                const auth = getAuth();
                data = await createUserWithEmailAndPassword(auth, email, password)
            }else{
                console.log("Log In");
            }   
            console.log("data", data);  
        } catch (error) {
            console.log("error", error)
        }
        
       
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input name="email" type="email" placeholder="Email" 
                required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Email" required value={password} onChange={onChange}/>
            <input type="submit" value={toggleAccount ? 'Create Account': 'Log In'}/>
            </form>
            <div>
                {/* <p>toggleAccount</p> */}
                <button>Continue with Google</button>
            </div>
        </div>
    )
}
export default Auth;