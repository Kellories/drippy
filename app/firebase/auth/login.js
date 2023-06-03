import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'



const signIn = async(email,password) =>{
    let result = null
    let error = null
   
    try{
        result = await signInWithEmailAndPassword(auth,email,password)
 
    }catch(e){
        error = e
    }
    return {result,error}
}
export default signIn