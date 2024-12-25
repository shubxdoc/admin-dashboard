import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("qwerty123");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(false);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(true);
      });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-center h-[90vh]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center pt-8 mx-auto my-auto md:justify-start md:px-6 md:pt-0">
            <p className="mt-2 text-left text-gray-500">
              Welcome , please enter your details.
            </p>
            <button className="flex items-center justify-center px-4 py-1 mt-8 transition-all duration-500 border rounded-md outline-none -2 ring-gray-400 ring-offset-2 focus:ring-2 hover:border-transparent hover:outline-stone-800">
              <img
                className="h-5 mr-2"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              />{" "}
              Log in with Google
            </button>
            <div className="relative flex h-px mt-8 bg-gray-200 place-items-center">
              <div className="absolute h-6 text-sm text-center text-gray-500 -translate-x-1/2 bg-white left-1/2 w-14">
                or
              </div>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden transition border-b-2 focus-within:border-b-gray-500">
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="relative flex overflow-hidden transition border-b-2 focus-within:border-b-gray-500">
                  <input
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border-gray-300 appearance-none focus:outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition bg-gray-900 rounded-lg shadow-md ring-gray-500 ring-offset-2 focus:ring-2"
              >
                Log in
              </button>
            </form>
            {error && (
              <span className="absolute inset-x-0 text-sm text-center text-red-300 bottom-64">
                Oops, Wrong credentials !
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
