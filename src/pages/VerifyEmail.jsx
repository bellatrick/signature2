import { useState } from "react";
import { toast } from "react-toastify";
import {

  isSignInWithEmailLink,

  signInWithEmailLink,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleEmailVerify = () => {
    setIsLoading(true);
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      setEmail(window.localStorage.getItem("emailForSignIn"));
      if (email.trim().length > 1) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          isLoading(false);
          window.localStorage.removeItem("emailForSignIn");
          toast.success("Your account has been successfully verified");
          navigate("/store");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <p className="bg-primary text-white h-screen">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="text-center text-[40px] animate-topslide bg-clip-text text-transparent font-dancing bg-gradient-to-br from-secondary to-red-500">
            Signature
          </p>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
            Verify your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-transparent border border-secondary py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleEmailVerify}
              className="space-y-6"
              method="POST"
            >
              <p>
                Please click on the verify button to verify your email address
              </p>
              {email.length < 1 && (
                <div>
                  {" "}
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
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full text-primary appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              )}
              <p>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {isLoading ? "Loading..." : " Verify"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </p>
  );
}
