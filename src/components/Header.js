import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector(store => store.user);
  console.log("redux store user : ", userStore);

  useEffect(() => {
    // During initial render / mount of Main component signing out users from firebase
    //signOut(auth);
    //let currentUser = "";
    onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in
    // When user signs in dispatch an reducer action to add userInfo to redux store
    // Sign up user with firebase after signing in will automatically sign the user in
    // Means user is already signed in and this method won't be called as the signed up user is signed in by default and there is no state change
    // To get this method called , sign in a different user using sign in button
      console.log("onAuthStateChanged signup/signin called");
      console.log("User is signed in : ", user);
      const {displayName, email, emailVerified} = user; 
      /*console.log("onAuthStateChanged signup/signin called");
      console.log("Calling addUser reducer function with user", user);
      console.log("user displayName : ", displayName);
      console.log("user email : ", email);
      console.log("user emailVerified : ", emailVerified);*/
      dispatch(addUser({name: displayName ,email: email, emailVerified: emailVerified}));
      navigate("/browse");
    
    } else {
    // User is signed out 
    // When user is signed out then dispatch an reducer action to remove userInfo from redux store
      console.log("onAuthStateChanged signout called");
      dispatch(removeUser());
      navigate("/login");
    }
    })
  }, [])


  function handleSignOutButton () {
    console.log("Signing out user : ",  auth.currentUser.displayName);
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log(`User ${auth.currentUser} signed out succesfully `);
      }).catch((error) => {
      // An error happened.
      console.log("Error in signing out user ", auth.currentUser );
      console.log(error);
    });
  }

  return <div className="bg-black backdrop-blur-sm w-full h-28 fixed shadow-lg flex justify-between">
    <img className=" w-1/6 mx-40 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo"/>

    {userStore && <div className="flex h-12 my-7 mr-6 justify-around items-center">
      <img src="https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="UserIcon"/>
      <span className="ml-3 bg-black text-white text-lg">{userStore.name}</span>
      <button className="ml-3 bg-black text-white text-lg" onClick={handleSignOutButton}> Sign Out</button>
    </div>}
    
  </div>
}

export default Header;