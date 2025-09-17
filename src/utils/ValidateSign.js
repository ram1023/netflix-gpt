export const ValidateSignIn = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);

    // console.log("isEmailValid : ",isEmailValid );
    // console.log("isPasswordValid : ", isPasswordValid);
    if(!isEmailValid) return "Email id is not valid !"
    if(!isPasswordValid) return "Password is not valid !"
    return "success";
}