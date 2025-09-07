import Header from "./Header";

const Login = () => {
    return <>
    <Header/>
    <div className="mx-[500px] my-[100px] w-2/5 h-[800px] absolute bg-opacity-90 bg-black" >
    <form className="w-4/5 h-[250px] mx-[80px] my-[50px] ">
      <h1 className="my-4 text-white text-3xl font-bold ">Sign In</h1>
      <input className="my-2 p-4 text-xl text-white rounded-md w-[95%] h-[80px] bg-opacity-20 bg-gray-700 border-white border" type="text" placeholder="Email or mobile number"></input>
      <input className="my-2 p-4 text-xl text-white rounded-md w-[95%] h-[80px] bg-opacity-20 bg-gray-700 border-white border"  type="password" placeholder="Password"></input>
      <button className="bg-red-600 font-bold text-xl text-white my-2 p-2 rounded-md w-[95%] h-[50px] cursor-pointer">Sign In</button>
      <p className="my-2 text-xl text-gray-200 text-center">OR</p>
      <button className="bg-gray-400 bg-opacity-30 font-bold text-xl text-white my-2 p-2 rounded-md w-[95%] h-[50px] cursor-pointer">Use a sign-in code </button>
      <p className="my-2 text-xl text-gray-200 text-center cursor-pointer"><u>Forgot password?</u></p>
      <p className="flex my-8">
        <input type="checkbox" className="appearance-none checked:bg-white checked:text-white h-[30px] w-[30px] bg-black border border-gray-300 rounded-md cursor-pointer" />
        <span className="text-white mx-2 mb-2 text-2xl h-[30px]">Remember me</span>
      </p>
      
      <p className="my-4 text-white text-2xl">New to Netflix?Sign up now.</p>
      <p className="my-4 text-gray-500 text-lg">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      <p className="my-3 text-blue-500"> <u>Learn more.</u></p>

    </form>
    
    </div>
    <div className="">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="Login Background img" />
          
      </div>
  </>

}

export default Login;