import React,{useState,useEffect,useContext,createContext} from 'react'
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
const AuthenContext  = createContext()
const Authen_context = ({children}) => {
  const [user, setuser] = useState(null)
    const googleSign = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
      signOut(auth)
    }
  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currenUser)=>{
      setuser(currenUser)
    })
    return ()=>{
      unsubcribe()
    }
  },[])
  console.log(user)
  return (
    <AuthenContext.Provider value={{googleSign,user,logOut}}>
        {children}
    </AuthenContext.Provider>
  )
}

export default Authen_context
export const User_authen = ()=>{

  return  useContext(AuthenContext)
}
