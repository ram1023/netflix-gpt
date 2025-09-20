# Building prerequisites

- Create react application using create-react-app
- Setup tailwind version 3
- Header
- Routing using react router
- Login Form
- SignUp Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying app to production
- Create Sign up user account in firebase
- Create sign in using firebase for authentication
- Create a redux store "appStore" for storing loggedin user from firebase
- Create a userSlice for storing logged in user info
- Create Sign out feature
- AuthSigninSignout listener is moved to Header page so that it can check if user is signed in or not and redirect to /browse or /login accordingly
- Bug :
  a. Even though user is signed out /browse works (which is wrong)
  b. Even though user is signed in login works (which is wrong)
  Fix:
  a. when user is signed in , navigate to /browse
  b. when user is signed out , navigate to /login
- Unsubscribe to onAuthStateChanged API whenever Header component is unmounted
- Add hardcoded values to constants.js file
- Register for TMDB API KEY and then use now playing movies API
- Create a moviesSlice for storing NowPlayingMovies API list by creating a new custom hook "useNowPlayingMovies"
-

# Features

1. Login/Signup page

   - Sign in form
     - Validate sign in form
     - Authenticate the user
   - After Sign in redirect to /browse page

2. /browse page (after authentication)

   - Header
   - Main movie
     - Trailer in background
     - Title and Description
     - Movie Suggestions
       - Movie Lists

3. Netflix GPT
   - Search Bar
   - Movie suggestions
