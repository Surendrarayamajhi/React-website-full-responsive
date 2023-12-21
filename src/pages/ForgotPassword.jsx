import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  function onChange(e){
   setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-10 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="data:image/png;base64,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" 
          alt="user_signIn" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input 
            type="email" 
            value={email} 
            id="email" 
            onChange={onChange}
            placeholder="E-mail address"
            className="mb-6 w-full px-4 py-2 text-xl 
            text-gray-700 bg-white border-gray-300
            rounded transition ease-in-out
            "/>
            <div className="flex justify-between whitespace-nowrap text-sm
            
            sm:text-lg">
              <p className="mb-6">Don't have a Account?
                <Link to="/sign-up"
                className="text-red-600 hover:text-red-800 transition duration-200
                ease-in-out ml-1">Register</Link>
              </p>
              <p>
                <Link to="/sign-in"
                className="text-blue-600 hover:text-blue-800 transition duration-200
                ease-in-out">Sign in instead</Link>
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white px-7 py-3
          text-sm font-medium uppercase rounded shadow-md 
          
          hover:bg-blue-700 transition duration-150 ease-in-out 
          hover:shadow-lg active:bg-blue-800" 
          type="submit">Send reset password Link</button>
          <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300
            after:border-t after:flex-1 after:border-gray-300">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth />
          </form>
         
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;
