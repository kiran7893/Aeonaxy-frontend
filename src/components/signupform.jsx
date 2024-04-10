import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.js";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const handlecrateUser = async () => {
    createUserWithEmailAndPassword(email, password);
    navigate("/profile");

    let dataSend = {
      email: email,
      name: name,
      username: username,
    };
    const baseUrl = "https://aeonaxy-backend-wtlt.onrender.com";
    // eslint-disable-next-line no-unused-vars
    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.status > 199 && res.status < 300) {
        alert("Send Successfully !");
      }
    });
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="#" className="text-pink-600 font-bold px-6 text-2xl">
            dribbble
          </a>
        </div>
        <div className="flex items-center">
          <div className="container mx-auto px-6">
            <p className="text-gray-600 text-sm">
              Already a member?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center py-0 min-h-screen bg-orange-100">
        <div className="flex flex-col gap-24  md:flex-row  items-center justify-center">
          <div className="md:mr-8">
            <h1 className="text-3xl font-bold mb-4">
              Discover the worlds top <br></br> Designers & Creatives.
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-6  max-w-sm">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6add1393834339.5e6f52ba06ab5.jpg"
                alt="Illustration"
                className="w-240 h-240"
              />
            </div>
            <p className="text-sm mt-2">Art by Peter Tarka</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg m-24 p-6  max-w-md">
            <h2 className="text-2xl font-bold mb-4">Sign up to Dribbble</h2>
            {/* <p className="text-red-500 mb-4">Username has already been taken</p> */}
            <div className="flex flex-col ">
              <div>
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="John"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border mb-4"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 ">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="6+ characters"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-2"
              />
            </div>
            <div className="flex mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-500">
                Creating an account means youre okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </label>
            </div>
            <button
              className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full mb-4"
              onClick={handlecrateUser}
            >
              Create Account
            </button>
            <p className="text-gray-500 text-sm">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
