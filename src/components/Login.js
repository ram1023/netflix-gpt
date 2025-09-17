import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateSignIn } from "../utils/ValidateSign";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState("true");
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);
    const dispatch = useDispatch();

    function handleToggleSignInSignUp (){
      setErrorMessage("");
      setSignInForm(!isSignInForm);
      if(email.current) email.current.value = "";
      if(password.current) password.current.value = "";
      if(userName.current) userName.current.value = "";
    }

    async function handleSignInSignUpButton(e) {
      e.preventDefault();
      //console.log("printing button event", e);
      //const text = e.target.innerText;
      //if( text === "Sign") {
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        let enteredName = "";
        if (userName.current) {
          enteredName = userName.current.value;
        }
        console.log(enteredEmail);
        console.log(enteredPassword);
        console.log(enteredName);
        const message = ValidateSignIn(email.current.value, password.current.value);
        console.log(message);
        if(message !== "success"){
          setErrorMessage(message);
        }
          
        const SIGNIN_OR_SIGNUP_TEXT = e.target.innerText;
        try {
        if(SIGNIN_OR_SIGNUP_TEXT === "Sign Up") {
              // Sign up user with firebase after signing in will automatically sign the user in
              // Means user is already signed in
              // To sign in a different user then use sign in method
             const userCredential =  await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
              const user = userCredential.user;
              console.log("signed up user : ", user);
              console.log("username value is : ", enteredName);
              console.log("email value is : ", enteredEmail);
              console.log("password value is : ", enteredPassword);
              await updateProfile(auth.currentUser, {
                displayName: enteredName
              });
                // Profile updated!
                if(auth.currentUser) await auth.currentUser.reload(); 
                console.log("Updated displayName for user ", auth.currentUser);
                const {displayName, email, emailVerified} = auth.currentUser;
                dispatch(removeUser());
                dispatch(addUser({name: displayName ,email: email, emailVerified: emailVerified}));

              //setTimeout(() => console.log("final user value : ", auth.currentUser), 1000);
          } else if (SIGNIN_OR_SIGNUP_TEXT === "Sign In"){
            //Sign in user only if user has signed up before with firebase
            const userCredential = await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
            const user = userCredential.user;
            console.log("user signed in : ", user);
            const {displayName, email, emailVerified} = user; 
            dispatch(addUser({name: displayName ,email: email, emailVerified: emailVerified}));
          }
        } catch (error) {
            console.error("Error in auth flow:", error);
            setErrorMessage(error.code + "-" + error.message);
        }
        
        if(email.current) email.current.value = "";
        if(password.current) password.current.value = "";
        if(userName.current) userName.current.value = "";
    }
    //console.log("isSignInForm : ", isSignInForm);
    return <>
    <Header/>
    <div className="mx-[500px] my-[100px] w-2/5 h-[800px] absolute bg-opacity-90 bg-black" >
    <form action="/login" className="w-4/5 h-[250px] mx-[80px] my-[50px] ">
      <h1 className="my-4 text-white text-3xl font-bold "> { isSignInForm ? "Sign In" : "Sign Up"}  </h1>

      {!isSignInForm && <input ref={userName} className="my-2 p-4 text-xl text-white rounded-md w-[95%] h-[80px] bg-opacity-20 bg-gray-700 border-white border" type="text" placeholder="First Name"></input> }
      <input ref={email} className="my-2 p-4 text-xl text-white rounded-md w-[95%] h-[80px] bg-opacity-20 bg-gray-700 border-white border" type="text" placeholder="Email or mobile number"></input>
      <input ref={password} className="my-2 p-4 text-xl text-white rounded-md w-[95%] h-[80px] bg-opacity-20 bg-gray-700 border-white border"  type="password" placeholder="Password"></input>

      <p className="text-red-800 text-lg my-2 font-medium"> {errorMessage} </p>
      <button className="bg-red-600 font-bold text-xl text-white my-2 p-2 rounded-md w-[95%] h-[50px] cursor-pointer" onClick={e => handleSignInSignUpButton(e)}>
      { isSignInForm ? "Sign In" : "Sign Up"} </button>

      { isSignInForm ?
      <div>
        <p className="my-2 text-xl text-gray-200 text-center">OR</p>
        <button className="bg-gray-400 bg-opacity-30 font-bold text-xl text-white my-2 p-2 rounded-md w-[95%] h-[50px] cursor-pointer">Use a sign-in code </button>
        <p className="my-2 text-xl text-gray-200 text-center cursor-pointer"><u>Forgot password?</u></p>
        <p className="flex my-8">
        <input type="checkbox" className="appearance-none checked:bg-white checked:text-white h-[30px] w-[30px] bg-black border border-gray-300 rounded-md cursor-pointer" />
        <span className="text-white mx-2 mb-2 text-2xl h-[30px]">Remember me</span>
        </p>
      
        <p className="my-4 text-white text-2xl">New to Netflix? <span className="cursor-pointer" onClick={handleToggleSignInSignUp}><u>Sign up now. </u></span></p>
        <p className="my-4 text-gray-500 text-lg">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        <p className="my-3 text-blue-500"> <u>Learn more.</u></p>
      </div> : <p className="my-4 text-gray-200 text-xl"> Already registered ? <u className="cursor-pointer" onClick={handleToggleSignInSignUp}>Sign in now </u> </p> 
      }
    </form>
    </div>
    <div className="">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="Login Background img" />
          
    </div>
  </>

}

export default Login;