# Building prerequisites

1. Create react application using create-react-app
2. Setup tailwind version 3
3. Header
4. Routing using react router
5. Login Form
6. SignUp Form
7. Form Validation
8. useRef Hook
9. Firebase setup
10. Deploying app to production
11. Create Sign up user account in firebase
12. Create sign in using firebase for authentication
13. Create a redux store for saving user info
14. Create Sign out feature
15. AuthSigninSignout listener is moved to Header page so that it can check if user is signed in or not and redirect to /browse or /login accordingly
16. Bug :
    Even though user is signed out /browse works (which is wrong)
    Even though user is signed in login works (which is wrong)
    Fix:
    a. when user is signed in , navigate to /browse
    b. when user is signed out , navigate to /login

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
