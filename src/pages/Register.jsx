import { useState } from "react";
import { toast } from "react-toastify";
import PasswordInput from "../components/PasswordInput";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setuserInput] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const { email, password, confirm_password } = userInput;
  const handleChange = (e) => {
    setuserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: " https://signature-3ccc2.web.app/verify",
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: " https://signature-3ccc2.web.app",
  };
  const handleEmailVerify = () => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false)
        // ...
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      toast.warn(
        "Please enter the same value for password and confirm password fields"
      );
      return;
    }
    setIsLoading(true);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
     .then(()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
   
      const user = userCredential.user;
      console.log(user);
      setIsLoading(false);
      toast.success("You have been successfully logged in");
      navigate("/");
    })
    .catch((error) => {
      toast.error(error.message);
      setIsLoading(false);
    });
   }) 
  };
  return (
    <p className="bg-primary text-white h-screen">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="text-center text-[40px] animate-topslide bg-clip-text text-transparent font-dancing bg-gradient-to-br from-secondary to-red-500">
            Signature
          </p>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
            Create an account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-transparent border border-secondary py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-start text-sm font-medium text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full text-primary appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <PasswordInput
                name="password"
                label={"Password"}
                value={password}
                onChange={handleChange}
              />
              <div className="mb-2">
                {" "}
                <PasswordInput
                  name="confirm_password"
                  label={"Confirm Password"}
                  value={confirm_password}
                  onChange={handleChange}
                />
              </div>

              <p>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {isLoading ? "Loading..." : " Register"}
                </button>
              </p>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-700 rounded-md px-2 text-gray-100">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div>
                  <p className="inline-flex items-center w-full justify-center rounded-md border border-secondary cursor-pointer bg-white py-2 px-4 text-sm font-medium text-primary shadow-sm hover:translate-y-1 transition-all">
                    <span className="sr-only">Sign in with Google</span>
                    <img
                      src="/assets/google.jpg"
                      className="h-6 object-cover"
                      alt="google logo"
                    />
                    oogle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </p>
  );
}
