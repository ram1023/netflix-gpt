import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_BG_LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector(store => store.user);
  //console.log("redux store user : ", userStore);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in
    // When user signs in dispatch an reducer action to add userInfo to redux store
    // Sign up user with firebase after signing in will automatically sign the user in
    // Means user is already signed in and this method won't be called as the signed up user is signed in by default and there is no state change
    // To get this method called , sign in a different user using sign in button
    // After signs in dispatch a reducer action to add userInfo to redux store and navigate to /browse
      //console.log("onAuthStateChanged signup/signin called");
      //console.log("User is signed in : ", user);
      const {displayName, email, emailVerified} = user;
      dispatch(addUser({name: displayName ,email: email, emailVerified: emailVerified}));
      navigate("/browse");
    
    } else {
    // User is signed out 
    // When user is signed out then dispatch a reducer action to remove userInfo from redux store and navigate to /login
      console.log("onAuthStateChanged signout called");
      dispatch(removeUser());
      navigate("/login");
    }
    })

    //Unsubscribe whenever Header component is unmounted
    return () => unsubscribe();
  }, [])


  function handleSignOutButton () {
    console.log("Signing out user : ",  auth.currentUser.displayName);
    signOut(auth).then(() => {
      // Sign-out successful.
      //console.log(`User ${auth.currentUser} signed out succesfully `);
      }).catch((error) => {
      // An error happened.
      console.log("Error in signing out user ", auth.currentUser );
      console.log(error);
    });
  }

  return <div className="w-full h-28 fixed flex justify-between z-10">
    <img className=" w-1/6 mx-40 " src={NETFLIX_BG_LOGO} alt="Netflix Logo"/>

    {userStore && <div className="flex h-12 my-7 mr-6 justify-around items-center">
      <img src={USER_LOGO} alt="UserIcon"/>
      <span className="ml-3 text-xl text-white font-bold">{userStore.name}</span>
      <button className="ml-3 text-xl text-white font-bold" onClick={handleSignOutButton}> Sign Out</button>
    </div>}
    
  </div>
}

export default Header;